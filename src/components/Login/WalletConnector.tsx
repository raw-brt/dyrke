import clsx from "clsx";
import { Dispatch, FC, useEffect, useState } from "react";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import type { Connector } from "wagmi";
import { useIsMounted } from "src/hooks/useIsMounted";
import { getWalletIso } from "../../lib/getWalletIso";
import { CHAIN_ID, ERROR_MESSAGE, MAINNET_API_URL } from "src/config/constants";
import { Button } from "src/components/UI/Button";
import { Spinner } from "src/components/UI/Spinner";
import LensIcon from "../../assets/lens-icon.svg";
import { SwitchNetwork } from "src/components/Shared/SwitchNetwork";
import {
  useAuthenticateMutation,
  useChallengeQuery,
  useUserProfilesQuery,
} from "../../generated/types";
import toast from "react-hot-toast";
import { useAuthStore } from "src/store/auth";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useProfileStore } from "src/store/profiles";
import { useNavigate } from "react-router-dom";
import { getAuthProperties, getUnauthProperties } from "../../lib/getFetchOptions";

interface Props {
  setIsConnected: Dispatch<boolean>;
  setHasLensProfile: Dispatch<boolean>;
}

export const WalletConnector: FC<Props> = ({ setIsConnected, setHasLensProfile }) => {
  // Dependencies & State
  const { address, connector: activeConnector } = useAccount();
  const { connectors, error: connectError, connectAsync } = useConnect();
  const signMessage = useSignMessage();
  const { chain } = useNetwork();
  const { isMounted } = useIsMounted();
  const [isSignatureLoading, setIsSignatureLoading] = useState(false);
  const navigate = useNavigate();

  // Auth store
  const authState = useAuthStore((state) => state.authState);
  const setAuthState = useAuthStore((state) => state.setAuthState);

  // Profile store
  const setProfiles = useProfileStore((state) => state.setProfiles);
  const setCurrentProfile = useProfileStore((state) => state.setCurrentProfile);
  const setCurrentProfileId = useProfileStore((state) => state.setCurrentProfileId);
  const setCurrentProfileHandle = useProfileStore((state) => state.setCurrentProfileHandle);

  // Mutations
  const authenticateMutation = useAuthenticateMutation(getUnauthProperties(MAINNET_API_URL), {
    onSuccess: (data) =>
      // Set auth global state if mutation succeeds
      data?.authenticate?.accessToken && data?.authenticate?.refreshToken
        ? setAuthState(data.authenticate)
        : console.log(data),
  });

  // Queries
  const signChallenge = useChallengeQuery(
    getUnauthProperties(MAINNET_API_URL),
    { request: { address } },
    {
      enabled: false,

      // Once the challenge is fetched from the API, sign it and get the pair of tokens.
      onSuccess: async (data) => {
        setIsSignatureLoading(true);

        // Sign the challenge
        const signature = await signMessage.signMessageAsync({
          message: data?.challenge?.text,
        });

        setIsSignatureLoading(false);

        // Authenticate user
        authenticateMutation.mutate({ request: { address, signature } });
      },
    },
  );

  const getProfiles = useUserProfilesQuery(
    getAuthProperties(MAINNET_API_URL, authState?.accessToken),
    {
      // Using Stani's profile for development purposes
      // ownedBy: address,
      ownedBy: ["0x7241DDDec3A6aF367882eAF9651b87E1C7549Dff"],
    },
    {
      // Fetch profiles once the auth data is set
      enabled: authState.accessToken !== "",
      cacheTime: Infinity,
      staleTime: Infinity,
      onSuccess: (data) => {
        try {
          // If user does not have any Lens profile:
          if (data?.profiles?.items?.length === 0) {
            setHasLensProfile(false);
            return;
          } else {
            const profiles: any = data?.profiles?.items;

            // Store in Profile store
            const currentProfile = profiles[0];
            setProfiles(profiles);
            setCurrentProfile(currentProfile);
            setCurrentProfileId(currentProfile.id);
            setCurrentProfileHandle(currentProfile.handle);

            // Go to dashboard
            navigate("/performance");
          }
        } catch (error) {
          // TODO: Send error to logger
          toast.error(`${ERROR_MESSAGE}: ${error}`);
        }
      },
    },
  );

  // Private methods
  const onConnect = async (connector: Connector) => {
    try {
      const account = await connectAsync({ connector });
      if (account) {
        setIsConnected(true);
      }
    } catch (error) {
      // Send message to logger
      toast.error(ERROR_MESSAGE);
    }
  };

  const handleSignin = async () => {
    try {
      // Run the sign in workflow
      await signChallenge.refetch();
    } catch (error) {
      // TODO: Send to logger

      // Show toast
      toast.error(`${ERROR_MESSAGE}. Details: ${error}`);
    }
  };

  // Check if there's already a connected account on render
  useEffect(() => {
    if (address) setIsConnected(true);
  }, []);

  // Button loading state
  const isLoading =
    (signChallenge.isLoading && signChallenge.isFetching) ||
    authenticateMutation.isLoading ||
    (getProfiles.isFetching && getProfiles.isFetching) ||
    isSignatureLoading;

  // If user has connected an account...
  if (activeConnector?.id) {
    return (
      <div className='space-y-3'>
        {chain?.id === CHAIN_ID ? (
          <Button
            size='lg'
            disabled={isLoading}
            icon={
              isLoading ? (
                <Spinner className='mr-0.5' size='xs' />
              ) : (
                <img src={LensIcon} className='mr-1 w-5 h-5 text-gray-900' alt='Lens Isotype' />
              )
            }
            onClick={() => handleSignin()}
          >
            Sign-in with Lens
          </Button>
        ) : (
          <SwitchNetwork />
        )}
        {(signChallenge.isError || authenticateMutation.isError || getProfiles.isError) && (
          <div className='flex items-center space-x-1 font-bold text-red-500'>
            <XCircleIcon className='w-5 h-5' />
            <div>{ERROR_MESSAGE}</div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='inline-block overflow-hidden space-y-3 w-full text-left align-middle transition-all transform'>
        {connectors.map((connector) => {
          return (
            <button
              key={connector.id}
              type='button'
              className={clsx(
                {
                  "hover:bg-gray-600": connector.id === activeConnector?.id,
                },
                "w-full h-auto flex justify-center items-center p-5 text-neutral-100 font-medium text-lg bg-gray-700 rounded-xl hover:bg-gray-600 hover:font-bold",
              )}
              onClick={() => onConnect(connector)}
            >
              <span className='w-full h-auto flex justify-between items-center'>
                {isMounted
                  ? connector.id === "injected"
                    ? "Browser Wallet"
                    : connector.name
                  : connector.name}
                {isMounted ? !connector.ready && " (not supported) " : ""}
              </span>
              <img
                src={getWalletIso(connector.name)}
                className='w-6 h-6'
                alt={connector.id}
                draggable={false}
              />
            </button>
          );
        })}
        {connectError?.message ? (
          <div className='flex items-center space-x-1 text-red-500'>
            <XCircleIcon className='w-5 h-5' />
            <div>{connectError?.message ?? "Failed to connect"}</div>
          </div>
        ) : null}
      </div>
    );
  }
};
