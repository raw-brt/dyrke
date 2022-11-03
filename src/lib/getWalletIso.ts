import { STATIC_ASSETS } from "./../config/constants";

export const getWalletIso = (name: string): string => {
  if (name === "WalletConnect") {
    return `${STATIC_ASSETS}/icons/wallet_connect_icon.svg`;
  } else if (name === "Coinbase Wallet") {
    return `${STATIC_ASSETS}/icons/coinbase_wallet_icon.png`;
  } else {
    return `${STATIC_ASSETS}/icons/browser_icon.svg`;
  }
};
