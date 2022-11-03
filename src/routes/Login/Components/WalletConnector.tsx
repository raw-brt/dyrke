import clsx from "clsx";
import type { Dispatch, FC } from "react";
import { useAccount, useConnect, useNetwork, useSignMessage } from "wagmi";
import type { Connector } from "wagmi";
import { useIsMounted } from "src/hooks/useIsMounted";
import { getWalletIso } from "../../../lib/getWalletIso";

interface Props {
  setIsConnected: Dispatch<boolean>;
  setHasLensProfile: Dispatch<boolean>;
};

export const WalletConnector: FC<Props> = ({setIsConnected, setHasLensProfile}) => {

  const { address, connector: activeConnector } = useAccount();
  const { connectors, error, connectAsync } = useConnect();
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
      // Send message to sentry

      // Show toast

      console.log(error);
    }
  };

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
              "w-full h-auto flex justify-center items-center p-5 text-neutral-100 bg-neutral-700 rounded-xl hover:bg-neutral-600 hover:font-bold"
            )}
            onClick={() => onConnect}
          >
            <span className=" w-full h-auto flex justify-between items-center">
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