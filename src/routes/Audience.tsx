import type { FC } from "react";
import { PageHeader } from "@components/Shared/PageHeader";
import { useProfileStore } from "src/store/profiles";
import { useInfiniteFollowersQuery } from "@generated/dyrketypes";
import { getUnauthProperties } from "@lib/getFetchOptions";
import { MAINNET_API_URL } from "src/config/constants";
import { PropertiesRow } from "@components/Audience/PropertiesRow";
import { AudienceItem } from "@components/Audience/AudienceItem";

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

  return (
    <>
      <PageHeader
        location={location}
        value={location === "Followers" ? followers : following}
        searchField={false}
      />
      <PropertiesRow />
      <ul className="w-full h-auto">
        {
          getFollowers.isLoading
            ? <li>Loading...</li>
            : (
              getFollowers?.data?.pages.map((page) => (
                page.followers.items.map((item, index) => (
                  <AudienceItem key={index} index={index} wallet={item.wallet} />
                ))
              ))
            )
        }
      </ul>
    </>
  );
};
