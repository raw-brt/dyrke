import { getStampFyiURL } from "./getStampFyiURL";
import { ZERO_ADDRESS } from "./../config/constants";
import { getIPFSLink } from "./getIPFSLink";

/**
 *
 * @param profile - Profile object
 * @returns avatar image url
 */
export const getAvatar = (profile: any): string => {
  return getIPFSLink(
    profile?.picture?.original?.url ??
      profile?.picture?.uri ??
      getStampFyiURL(profile?.ownedBy ?? ZERO_ADDRESS),
  );
};
