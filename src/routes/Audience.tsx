import type { FC } from "react";
import { PageHeader } from "@components/Shared/PageHeader";
import { useProfileStore } from "src/store/profiles";
import { useInfiniteFollowersQuery } from "@generated/dyrketypes";
import { getUnauthProperties } from "@lib/getFetchOptions";
import { MAINNET_API_URL } from "src/config/constants";
import { AudienceList } from "@components/Audience/AudienceList";

type Location = "Followers" | "Following";
type Props = { location: Location }

export const Audience: FC<Props> = ({ location }) => {
  const followers = useProfileStore((state) => state.currentProfile?.stats.totalFollowers);
  const following = useProfileStore((state) => state.currentProfile?.stats.totalFollowing);
  const profileId = useProfileStore((state) => state.currentProfileId);

  const request = {
    cursor: 0,
    limit: 20,
    profileId: profileId
  };

  const getFollowers = useInfiniteFollowersQuery(
    getUnauthProperties(MAINNET_API_URL),
    "request",
     { request }
  );

  if (getFollowers.isLoading) {
    return <p className="text-white">Loading...</p>
  } else {
    return (
      <>
        <PageHeader
          location={location}
          value={location === "Followers" ? followers : following}
          searchField={false}
        />
        <AudienceList data={getFollowers?.data} />
      </>
    );
  }
};
