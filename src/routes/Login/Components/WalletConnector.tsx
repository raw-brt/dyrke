import clsx from "clsx";
import { Dispatch, FC, useEffect } from "react";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import type { Connector } from "wagmi";
import { useIsMounted } from "src/hooks/useIsMounted";
import { getWalletIso } from "../../../lib/getWalletIso";
import { CHAIN_ID } from "src/config/constants";
import { Button } from "src/components/UI/Button";
import { Spinner } from "src/components/UI/Spinner";
import LensIcon from "../../../assets/lens-icon.svg";
import { SwitchNetwork } from "src/components/shared/SwitchNetwork";

interface Props {
  setIsConnected: Dispatch<boolean>;
  setHasLensProfile: Dispatch<boolean>;
};

export const WalletConnector: FC<Props> = ({setIsConnected, setHasLensProfile}) => {

  const { address, connector: activeConnector } = useAccount();
  const { connectors, error, connectAsync } = useConnect();
  const { chain } = useNetwork();
  const { isMounted } = useIsMounted();

  const onConnect = async (connector: Connector) => {
    try {
      const account = await connectAsync({ connector });
      if (account) {
        setIsConnected(true);

        // Delete
        console.log("Connected with account: ", account)
      }
    } catch (error) {
      // Send message to logger

      // Show toast

      console.log(error);
    }
  };

  // Check if there's already a connected account on render
  useEffect(() => {
    if (address) setIsConnected(true);
  }, []);

  const isLoading = false;

  // If user has connected an account...

  if (activeConnector?.id) {
    return (
      <div className="space-y-3">
        {
          chain?.id === CHAIN_ID
            ?
              (
                <Button
                  size="lg"
                  // disabled={isLoading}
                  icon=
                    {
                      isLoading 
                        ? <Spinner className="mr-0.5" size="xs" />
                        : <img src={LensIcon} className="mr-1 w-5 h-5 text-neutral-900" alt="Lens Isotype" />
                    }
                >
                  Sign-in with Lens
                </Button>
              )
            : <SwitchNetwork />
        }
      </div>
    );
  } else {
    return (
      <div className="inline-block overflow-hidden space-y-3 w-full text-left align-middle transition-all transform">
        {connectors.map((connector) => {
          return (
            <button
              key={connector.id}
              type="button"
              className={clsx(
                {
                  "hover:bg-neutral-600": connector.id === activeConnector?.id
                },
                "w-full h-auto flex justify-center items-center p-5 text-neutral-100 font-medium text-lg bg-neutral-700 rounded-xl hover:bg-neutral-600 hover:font-bold"
              )}
              onClick={() => onConnect(connector)}
            >
              <span className="w-full h-auto flex justify-between items-center">
                {isMounted ? (connector.id === "injected" ? "Browser Wallet" : connector.name): connector.name}
                {isMounted ? !connector.ready && " (not supported) " : ""}
              </span>
              <img 
                src={getWalletIso(connector.name)}
                className="w-6 h-6"
                alt={connector.id}
                draggable={false}
              />
              </button>
          )
        })}
      </div>
    );
  }

  return (
    <div className="inline-block overflow-hidden space-y-3 w-full text-left align-middle transition-all transform">
      {connectors.map((connector) => {
        return (
          <button
            key={connector.id}
            type="button"
            className={clsx(
              {
                "hover:bg-neutral-600": connector.id === activeConnector?.id
              },
              "w-full h-auto flex justify-center items-center p-5 text-neutral-100 font-medium text-lg bg-neutral-700 rounded-xl hover:bg-neutral-600 hover:font-bold"
            )}
            onClick={() => onConnect(connector)}
          >
            <span className="w-full h-auto flex justify-between items-center">
              {isMounted ? (connector.id === "injected" ? "Browser Wallet" : connector.name): connector.name}
              {isMounted ? !connector.ready && " (not supported) " : ""}
            </span>
            <img 
              src={getWalletIso(connector.name)}
              className="w-6 h-6"
              alt={connector.id}
              draggable={false}
            />
            </button>
        )
      })}
    </div>
  );
};