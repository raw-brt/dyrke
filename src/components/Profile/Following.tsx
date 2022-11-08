import { UsersIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { Loader } from "../Shared/Loader";
import { Empty } from "../UI/Empty";
import { ErrorMessage } from "../UI/ErrorMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteLoader } from "../UI/InfiniteLoader";
import { Profile, useFollowingQuery } from "../../generated/types";
import { getUnauthProperties } from "../../lib/getFetchOptions";
import { MAINNET_API_URL, SCROLL_THRESHOLD } from "../../config/constants";
interface Props {
  profile: Profile;
  onProfileSelected?: (profile: Profile) => void;
}

export const Following: FC<Props> = ({ profile, onProfileSelected }) => {
  const profilesIFollow = useFollowingQuery(
    getUnauthProperties(MAINNET_API_URL),
    {
      request: { address: profile?.ownedBy, limit: 10 },
    },
    {
      keepPreviousData: true,
    },
  );

  const followings = profilesIFollow.data?.following?.items;
  const pageInfo = profilesIFollow?.data?.following?.pageInfo;
  const hasMore = pageInfo?.next && followings?.length !== pageInfo.totalCount;

  const getMore = async () => {
    await profilesIFollow.refetch();
  };

  if (profilesIFollow.isFetching) {
    return <Loader message='Loading accounts' />;
  }

  if (followings?.length === 0) {
    return (
      <Empty
        message={
          <div>
            <span className='mr-1 font-bold'>@{profile?.handle}</span>
            <span>doesn&apos;t follow anyone</span>
          </div>
        }
        icon={<UsersIcon className='w-8 h-8 text-primary-500' />}
        hideCard
      />
    );
  }

  return (
    <div>
      <ErrorMessage
        className='m-5'
        title='Failed to load the profiles you are following.'
        error={profilesIFollow.error && profilesIFollow.error}
      />
      <InfiniteScroll
        dataLength={followings?.length ?? 0}
        scrollThreshold={SCROLL_THRESHOLD}
        hasMore={hasMore}
        next={getMore}
        loader={<InfiniteLoader />}
        scrollableTarget='scrollableDiv'
      >
        <div className='divide-y divide-gray-700'>
          {followings?.map((following) => (
            <div
              className={`p-5 ${onProfileSelected} && "hover:bg-gray-600 cursor-pointer"`}
              key={following?.profile?.id}
              onClick={
                onProfileSelected && following.profile
                  ? () => onProfileSelected(following.profile as Profile)
                  : undefined
              }
            ></div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
