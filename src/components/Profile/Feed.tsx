import {
  Profile,
  PublicationMainFocus,
  PublicationTypes,
  useProfileFeedInfiniteQuery,
  useProfileFeedQuery,
} from "../../generated/types";
import { useState } from "react";
import type { FC } from "react";
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
import { DyrkePublication, useInfiniteProfileFeedQuery } from "src/generated/dyrketypes";
import { getAuthProperties } from "@lib/getFetchOptions";

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

  const request = { 
    publicationTypes,
    metadata,
    profileId: profile?.id,
    limit: 10,
    cursor: null
  }
  const reactionRequest = currentProfile ? { profileId: currentProfile?.id } : null;
  const profileId = currentProfile?.id ?? null;

  // const profileFeed = useProfileFeedInfiniteQuery(
  //   getAuthProperties(MAINNET_API_URL, accessToken),
  //   {
  //     request: { 
  //       publicationTypes,
  //       metadata,
  //       profileId: profile?.id,
  //       limit: 10,
  //       cursor
  //     },
  //     reactionRequest,
  //     profileId,
  //   },
  //   {
  //     refetchOnWindowFocus: false,
  //     keepPreviousData: true,
  //     // Al estar haciendo el spread, cuando cambio el tipo de feed me los acumula, no los actualiza
  //     // onSuccess: (data) => setCursor(data?.pages[data?.pages.length - 1]?.publications?.pageInfo?.next),
  //     getNextPageParam: (lastPage, pages) => lastPage?.publications?.pageInfo?.next
      
  //   },
  // );

  const profileFeed = useInfiniteProfileFeedQuery(
    getAuthProperties(MAINNET_API_URL, accessToken),
    "request",
    {
      request,
      reactionRequest,
      profileId,
    },
    {
      getNextPageParam: (lastPage, pages) => {
        const nextCursor: string | undefined = lastPage.publications.pageInfo.next;
        console.log("Lastpage is: ", lastPage)
        console.log("next cursor is: ", nextCursor)

        if (nextCursor) {
          return {
            publicationTypes,
            metadata,
            profileId: profile?.id,
            limit: 10,
            cursor: nextCursor
          }
        } else {
          return undefined;
        }
      }
    }
  );

  if (profileFeed.error) {
    return <ErrorMessage title='Failed to load profile feed' error={profileFeed?.error} />;
  }

  const handleLoadMore = () => {
    profileFeed.fetchNextPage();
    setCursor(profileFeed?.data?.pages[profileFeed?.data?.pages.length - 1]?.publications?.pageInfo?.next);
  };

  const handlePublicationsLength = () => {
    let counter = 0;
    profileFeed?.data?.pages?.map((page) => counter += page.publications.items.length)
    return counter;
  };

  if (profileFeed.isSuccess && profileFeed?.data.pages) console.log(profileFeed?.data.pages)

  return (
    <div className='w-full h-full pb-10 overflow-auto' id='scrollableDiv'>
      <InfiniteScroll
        dataLength={handlePublicationsLength() ?? 0}
        scrollThreshold={SCROLL_THRESHOLD}
        hasMore={profileFeed.hasNextPage === true ? true : false}
        next={handleLoadMore}
        loader={<InfiniteLoader />}
        scrollableTarget="scrollableDiv"
      >
        <Card className='divide-y-[1px] divide-gray-700/80'>
          {
            profileFeed?.data?.pages?.map((page: any) => (
              page?.publications?.items?.map((publication: DyrkePublication, index: number) => (
                <SinglePublication
                  key={`${publication.id}_${index}`}
                  publication={publication as any}
                  showThread={type !== "MEDIA"}
                />
              )))
          )}
      </Card>
        {/* {profileFeed?.isFetching && <PublicationsSkeleton />} */}
      </InfiniteScroll>
    </div>
  );
};
