import { Dispatch, FC, useState } from "react";
import { useProfileStore } from "src/store/profiles";
import { FeedSelector } from "./FeedSelector";
import { Feed } from "./Feed";
import { DetailsSidebar } from "./DetailsSidebar";

type FeedType = "FEED" | "REPLIES" | "MEDIA";

export const ProfileSidebar: FC = () => {

  // State & Dependencies
  const [feedType, setFeedType] = useState<FeedType>("FEED");
  const currentProfile = useProfileStore((state) => state.currentProfile);

  return (
    <>
      <DetailsSidebar profile={currentProfile as any} />

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
