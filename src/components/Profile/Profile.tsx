import { Dispatch, FC, useState } from "react";
import { STATIC_ASSETS } from "src/config/constants";
import { useProfileStore } from "src/store/profiles";
import { GridItemEight, GridItemFour, GridLayout } from "../UI/GridLayout";
import Cover from "./Cover";
import { Details } from "./Details";
import { FeedSelector } from "./FeedSelector";
import { Feed } from "../Profile/Feed";

type FeedType = "FEED" | "REPLIES" | "MEDIA";
interface Props {
  isSidebar: boolean
}

export const Profile: FC<Props> = ({ isSidebar = false }) => {
  const [feedType, setFeedType] = useState<FeedType>("FEED");

  // State & Dependencies
  const currentProfile = useProfileStore((state) => state.currentProfile);

  return (
    <>
      {
        !isSidebar ? (
          <Cover
            cover={
              currentProfile?.coverPicture?.__typename === "MediaSet"
                ? currentProfile?.coverPicture?.original?.url
                : `${STATIC_ASSETS}/patterns/2.svg`
            }
          />
        ) : null
      }

      <Details profile={currentProfile as any} isSidebar={true} />

      <FeedSelector
        stats={currentProfile?.stats as any}
        feedType={feedType}
        setFeedType={setFeedType as Dispatch<string>}
      />
      {(feedType === "FEED" || feedType === "REPLIES" || feedType === "MEDIA") && (
        <Feed profile={currentProfile as any} type={feedType} />
      )}
    </>
  );
};
