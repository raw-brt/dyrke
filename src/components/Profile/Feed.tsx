import {
  Profile,
  PublicationMainFocus,
  PublicationTypes,
  useProfileFeedQuery,
} from "../../generated/types";
import { FC, useState } from "react";
import { useProfileStore } from "src/store/profiles";
import { MAINNET_API_URL, SCROLL_THRESHOLD } from "src/config/constants";
import { useAuthStore } from "src/store/auth";
import { PublicationsSkeleton } from "../Shared/Skeleton/PublicationsSkeleton";
import { Empty } from "../UI/Empty";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "../UI/ErrorMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteLoader } from "../UI/InfiniteLoader";
import { Card } from "../UI/Card";
import { SinglePublication } from "../Publication/SinglePublication";
import { getAuthProperties } from "src/lib/getFetchOptions";
import { DyrkePublication } from "src/generated/dyrketypes";

interface Props {
  profile: Profile;
  type: "FEED" | "REPLIES" | "MEDIA";
}

export const Feed: FC<Props> = ({ profile, type }) => {
  const [cursor, setCursor] = useState(null);
  const accessToken = useAuthStore((state) => state.authState.accessToken);
  const currentProfile = useProfileStore((state) => state.currentProfile);

  // Variables
  const publicationTypes =
    type === "FEED"
      ? [PublicationTypes.Post, PublicationTypes.Mirror]
      : type === "MEDIA"
      ? [PublicationTypes.Post, PublicationTypes.Comment]
      : [PublicationTypes.Comment];

  const metadata =
    type === "MEDIA"
      ? {
          mainContentFocus: [
            PublicationMainFocus.Video,
            PublicationMainFocus.Image,
            PublicationMainFocus.Audio,
          ],
        }
      : null;

  // TODO: Control pagination
  const request = {
    publicationTypes,
    metadata,
    profileId: profile?.id,
    limit: 10,
    cursor: cursor,
  };
  const reactionRequest = currentProfile ? { profileId: currentProfile?.id } : null;
  const profileId = currentProfile?.id ?? null;

  const profileFeed = useProfileFeedQuery(
    getAuthProperties(MAINNET_API_URL, accessToken),
    {
      request,
      reactionRequest,
      profileId,
    },
    {
      keepPreviousData: true,
      // onSuccess: (data) => {
      //   if (
      //     data?.publications?.pageInfo?.next &&
      //     data?.publications?.items?.length !== data?.publications?.pageInfo?.totalCount
      //   ) {
      //     setCursor(data?.publications?.pageInfo?.next);
      //   }
      // },
    },
  );

  // TODO: Update
  const loadMore = async () => {
    console.log("entra");
    // if (profileFeed.isFetching || profileFeed.isLoading) return;
    await profileFeed.refetch();
  };

  const publications = profileFeed?.data?.publications?.items;
  const pageInfo = profileFeed?.data?.publications?.pageInfo;
  const hasMore = pageInfo?.next && publications?.length !== pageInfo.totalCount;

  console.log(publications);

  if (profileFeed.isFetching) return <PublicationsSkeleton />;

  if (publications?.length === 0) {
    return (
      <Empty
        message={
          <div>
            <span className='mr-1 font-bold'>@{profile?.handle}</span>
            <span>doesn’t {type.toLowerCase()}ed yet!</span>
          </div>
        }
        icon={<RectangleStackIcon className='w-8 h-8 text-primary-500' />}
      />
    );
  }

  if (profileFeed.error) {
    return <ErrorMessage title='Failed to load profile feed' error={profileFeed?.error} />;
  }

  return (
    <InfiniteScroll
      dataLength={publications?.length ?? 0}
      scrollThreshold={SCROLL_THRESHOLD}
      hasMore={hasMore}
      next={loadMore}
      loader={<InfiniteLoader />}
    >
      <Card className='divide-y-[1px] divide-gray-700/80'>
        {publications?.map((publication, index: number) => (
          <SinglePublication
            key={`${publication.id}_${index}`}
            publication={publication as DyrkePublication}
            showThread={type !== "MEDIA"}
          />
        ))}
      </Card>
    </InfiniteScroll>
  );
};
