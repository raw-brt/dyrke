import clsx from "clsx";
import { Dispatch, FC, useEffect, useState } from "react";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import type { Connector } from "wagmi";
import { useIsMounted } from "src/hooks/useIsMounted";
import { getWalletIso } from "../../../lib/getWalletIso";
import { CHAIN_ID, ERROR_MESSAGE, TESTNET_API_URL } from "src/config/constants";
import { Button } from "src/components/UI/Button";
import { Spinner } from "src/components/UI/Spinner";
import LensIcon from "../../../assets/lens-icon.svg";
import { SwitchNetwork } from "src/components/shared/SwitchNetwork";
import {
  useAuthenticateMutation,
  useChallengeQuery,
  useUserProfilesQuery,
} from "../../../generated/types";
import toast from "react-hot-toast";
import { useAuthStore } from "src/store/auth";

interface Props {
  setIsConnected: Dispatch<boolean>;
  setHasLensProfile: Dispatch<boolean>;
}

export const WalletConnector: FC<Props> = ({ setIsConnected, setHasLensProfile }) => {
  // Dependencies & State

  const { address, connector: activeConnector } = useAccount();
  const { connectors, error, connectAsync } = useConnect();
  const signMessage = useSignMessage();
  const { chain } = useNetwork();
  const { isMounted } = useIsMounted();

  // Auth store
  const authState = useAuthStore((state) => state.authState);
  const setAuthState = useAuthStore((state) => state.setAuthState);

  // Mutations
  const authenticateMutation = useAuthenticateMutation(
    {
      endpoint: TESTNET_API_URL,
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    },
    {
      onSuccess: (data) => (
        data?.authenticate?.accessToken && data?.authenticate?.refreshToken
          ? 
            setAuthState(data.authenticate) 
          : console.log(data)
        )
    },
  );

  // Queries
  const signChallenge = useChallengeQuery(
    {
      endpoint: TESTNET_API_URL,
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
        },
      },
    },
    { request: { address } },
    {
      enabled: false,

      // Once the challenge is fetched from the API, sign it and get the pair of tokens.
      onSuccess: async (data) => {
        // Sign the challenge
        const signature = await signMessage.signMessageAsync({
          message: data?.challenge?.text,
        });

        // Authenticate user
        authenticateMutation.mutate({ request: { address, signature } });

        // Store tokens
        setAuthState({
          accessToken: authenticateMutation?.data?.authenticate?.accessToken,
          refreshToken: authenticateMutation?.data?.authenticate?.refreshToken,
        });

        // Check if there are Lens profiles in the connected account
        await getProfiles.refetch();
      },
    },
  );

  const getProfiles = useUserProfilesQuery(
    {
      endpoint: TESTNET_API_URL,
      fetchParams: {
        headers: {
          "Content-Type": "application/json",
          "x-access-token": authState.accessToken
        },
      },
    },
    {
      ownedBy: [address]
    },
    {
      enabled: false,
      onSuccess: (data) => console.log("Data from profiles is: ", data)
    }
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

      // Show toast

      console.log(error);
    }
  };

  const handleSignChallenge = async () => {
    try {
      // Run the auth workflow
      await signChallenge.refetch();

    } catch (error) {
      console.log(error);
    }
  };

  // Check if there's already a connected account on render
  useEffect(() => {
    if (address) setIsConnected(true);
  }, []);

  // If user has connected an account...

  if (activeConnector?.id) {
    return (
      <div className='space-y-3'>
        {chain?.id === CHAIN_ID ? (
          <Button
            size='lg'
            disabled={signChallenge.isFetching}
            icon={
              signChallenge.isFetching ? (
                <Spinner className='mr-0.5' size='xs' />
              ) : (
                <img src={LensIcon} className='mr-1 w-5 h-5 text-neutral-900' alt='Lens Isotype' />
              )
            }
            onClick={() => handleSignChallenge()}
          >
            Sign-in with Lens
          </Button>
        ) : (
          <SwitchNetwork />
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
                  "hover:bg-neutral-600": connector.id === activeConnector?.id,
                },
                "w-full h-auto flex justify-center items-center p-5 text-neutral-100 font-medium text-lg bg-neutral-700 rounded-xl hover:bg-neutral-600 hover:font-bold",
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
      </div>
    );
  }
};
