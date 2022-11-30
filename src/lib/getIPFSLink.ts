import { IPFS_GATEWAY } from "../config/constants";

/**
 *
 * @param hash - IPFS hash
 * @returns IPFS link
 */

export const getIPFSLink = (hash: string): string => {
  const gateway = IPFS_GATEWAY;

  if (hash.includes("https://ipfs.io/ipfs/")) {
    return hash
    .replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${hash}`)
    .replace("https://ipfs.io/ipfs/", gateway)
    .replace("ipfs://", gateway);
  } else {
    return hash
    .replace(/^Qm[1-9A-Za-z]{44}/gm, `${gateway}${hash}`)
    .replace("ipfs://", gateway);
  }
};
