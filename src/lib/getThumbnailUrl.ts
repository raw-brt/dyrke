import { getIPFSLink } from "./getIPFSLink";
import { DyrkePublication } from "@generated/dyrketypes";

export const getThumbnailUrl = (publication: DyrkePublication | undefined): string => {
  if (!publication) {
    return "";
  }
  const url = publication.metadata?.cover?.original.url || publication.metadata?.image;

  return getIPFSLink(url);
};
