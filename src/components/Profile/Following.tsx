import { Profile, useFollowingQuery } from "@generated/types";
import { getUnauthProperties } from "@lib/getFetchOptions";
import type { FC } from "react";
import { MAINNET_API_URL } from "src/config/constants";
import { ErrorMessage } from "../UI/ErrorMessage";

interface Props {
  profile: Profile,
  onProfileSelected?: (profile: Profile) => void
};

export const Following: FC<Props> = ({ profile, onProfileSelected }) => {

  const profilesIFollow = useFollowingQuery(
    getUnauthProperties(MAINNET_API_URL),
    {
      request: { address: profile?.ownedBy, limit:10 }
    },
    {
      keepPreviousData: true
    }
  );

  return (
    <div>
      <ErrorMessage className="m-5" title="Failed to load the profiles you are following." error={error} />
    </div>
  );
};