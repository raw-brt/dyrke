import { ALCHEMY_KEY, ALCHEMY_RPC, APP_NAME, CHAIN_ID, IS_MAINNET } from "./constants";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";

const { chains, provider } = configureChains(
  [IS_MAINNET ? chain.polygon : chain.polygonMumbai],
  [alchemyProvider({ apiKey: ALCHEMY_KEY })]
);

const connectors = () => {
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true }
    }),
    new WalletConnectConnector({
      chains,
      options: { rpc: { [CHAIN_ID]: ALCHEMY_RPC } }
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: APP_NAME,
      },
    }),
  ];
};

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});