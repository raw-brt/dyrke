import {
  Profile,
  PublicationMainFocus,
  PublicationTypes,
  useProfileFeedQuery,
} from "../../generated/types";
import { useState } from "react";
import type {FC } from "react";
import { useProfileStore } from "src/store/profiles";
import { MAINNET_API_URL } from "src/config/constants";
import { useAuthStore } from "src/store/auth";
import { PublicationsSkeleton } from "../Shared/Skeleton/PublicationsSkeleton";
import { Empty } from "../UI/Empty";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import { ErrorMessage } from "../UI/ErrorMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import { InfiniteLoader } from "../UI/InfiniteLoader";
import { Card } from "../UI/Card";
import { SinglePublication } from "../Publication/SinglePublication";
import { DyrkePublication } from "src/generated/dyrketypes";
import { getAuthProperties } from "@lib/getFetchOptions";

interface Props {
  profile: Profile;
  type: "FEED" | "REPLIES" | "MEDIA";
}

export const Feed: FC<Props> = ({ profile, type }) => {
  const [cursor, setCursor] = useState(null);
  const [feedPublications, setFeedPublications] = useState<unknown[]>([]);
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
      refetchOnWindowFocus: false,
      onSuccess: (data) => setFeedPublications([...feedPublications as [any], data?.publications?.items])
    },
  );

  const publications = profileFeed?.data?.publications?.items;
  const pageInfo = profileFeed?.data?.publications?.pageInfo;
  const hasMore = pageInfo?.next && publications?.length !== pageInfo.totalCount;

  const loadMore = () => {
    if (hasMore) setCursor(profileFeed?.data?.publications?.pageInfo?.next);
  };

  // if (profileFeed.isFetching) return <PublicationsSkeleton />;

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
    <div className="w-full h-full pb-10 overflow-auto" id="scrollableDiv">
      <InfiniteScroll
        dataLength={publications?.length ?? 0}
        hasMore={hasMore}
        next={loadMore}
        loader={<InfiniteLoader />}
        scrollableTarget="scrollableDiv"
      >
        <Card className='divide-y-[1px] divide-gray-700/80'>
          {feedPublications?.map((page: any) => (
            page.map((publication: DyrkePublication, index: number) => (
              <SinglePublication
                key={`${publication.id}_${index}`}
                publication={publication as DyrkePublication}
                showThread={type !== "MEDIA"}
            />
            ))
          ))}
        </Card>
        {profileFeed?.isFetching && <PublicationsSkeleton />}
      </InfiniteScroll>
    </div>
  );
};
