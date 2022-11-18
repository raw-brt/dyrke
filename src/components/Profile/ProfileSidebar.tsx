import { Dispatch, FC, useState } from "react";
import { STATIC_ASSETS } from "src/config/constants";
import { useProfileStore } from "src/store/profiles";
import { GridItemEight, GridItemFour, GridLayout } from "../UI/GridLayout";
import { FeedSelector } from "./FeedSelector";
import { Feed } from "./Feed";
import { DetailsSidebar } from "./DetailsSidebar";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "src/store/auth";
import { useNavigate } from "react-router-dom";

type FeedType = "FEED" | "REPLIES" | "MEDIA";

export const ProfileSidebar: FC = () => {
  // State & Dependencies
  const [feedType, setFeedType] = useState<FeedType>("FEED");
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const setAuthStore = useAuthStore((state) => state.setAuthState);
  const navigate = useNavigate();

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
