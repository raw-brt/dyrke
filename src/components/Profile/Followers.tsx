import { Loader } from "@components/Shared/Loader";
import { UserProfile } from "@components/Shared/UserProfile";
import WalletProfile from "@components/Shared/WalletProfile";
import { Empty } from "@components/UI/Empty";
import { ErrorMessage } from "@components/UI/ErrorMessage";
import { InfiniteLoader } from "@components/UI/InfiniteLoader";
import { Profile, useFollowersQuery, Wallet } from "@generated/types";
import { UsersIcon } from "@heroicons/react/24/outline";
import { getAuthProperties } from "@lib/getFetchOptions";
import { FC, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { MAINNET_API_URL, SCROLL_THRESHOLD } from "src/config/constants";
import { useAuthStore } from "src/store/auth";


interface Props {
  profile: Profile;
}

const Followers: FC<Props> = ({ profile }) => {
  const [limit, setLimit] = useState(10);
  const accessToken = useAuthStore((state) => state.authState.accessToken);

  // Followers query
  const getFollowers = useFollowersQuery(
    getAuthProperties(MAINNET_API_URL, accessToken),
    {
      request: { profileId: profile?.id, limit: limit }
    }
  );

  console.log("Followers: ", getFollowers)

  const followers = getFollowers?.data?.followers?.items;
  const pageInfo = getFollowers?.data?.followers?.pageInfo;
  const hasMore = pageInfo?.next && followers?.length !== pageInfo.totalCount;

  const loadMore = async () => {
    await getFollowers.refetch();
  };

  if (getFollowers.isLoading) {
    return <Loader message="Loading followers" />;
  }

  if (followers?.length === 0) {
    return (
      <Empty
        message={
          <div>
            <span className="mr-1 font-bold">@{profile?.handle}</span>
            <span>doesn’t have any followers yet.</span>
          </div>
        }
        icon={<UsersIcon className="w-8 h-8 text-brand" />}
        hideCard
      />
    );
  }

  return (
    <div className="overflow-y-auto max-h-[80vh]" id="scrollableDiv">
      <ErrorMessage className="m-5" title="Failed to load followers" error={getFollowers?.error} />
      <InfiniteScroll
        dataLength={followers?.length ?? 0}
        scrollThreshold={SCROLL_THRESHOLD}
        hasMore={hasMore}
        next={loadMore}
        loader={<InfiniteLoader />}
        scrollableTarget="scrollableDiv"
      >
        <div className="divide-y dark:divide-gray-700">
          {followers?.map((follower) => (
            <div className="p-5" key={follower?.wallet?.defaultProfile?.id}>
              {follower?.wallet?.defaultProfile ? (
                <UserProfile
                  profile={follower?.wallet?.defaultProfile as Profile}
                  showBio
                  showFollow
                  isFollowing={follower?.wallet?.defaultProfile?.isFollowedByMe}
                />
              ) : (
                <WalletProfile wallet={follower?.wallet as Wallet} />
              )}
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Followers;