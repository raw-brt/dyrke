
import type { ProfileStats } from "@generated/types";
import { ChatBubbleLeftIcon, FilmIcon, PencilIcon } from "@heroicons/react/24/outline";
import type { Dispatch, FC } from "react";
import TabButton from "../UI/TabButton";

interface Props {
  stats: ProfileStats;
  setFeedType: Dispatch<string>;
  feedType: string;
}

export const FeedSelector: FC<Props> = ({ stats, setFeedType, feedType }) => {
  return (
    <div className="flex overflow-x-auto gap-3 pb-2 mt-4 mb-2 sm:px-0 sm:mb-4 md:pb-0">
      <TabButton
        name="Feed"
        icon={<PencilIcon className="w-4 h-4" />}
        active={feedType === "FEED"}
        count={stats?.totalPosts + stats?.totalMirrors}
        onClick={() => setFeedType("FEED")}
      />
      <TabButton
        name="Replies"
        icon={<ChatBubbleLeftIcon className="w-4 h-4" />}
        active={feedType === "REPLIES"}
        count={stats?.totalComments}
        onClick={() => setFeedType("REPLIES")}
      />
      <TabButton
        name="Media"
        icon={<FilmIcon className="w-4 h-4" />}
        active={feedType === "MEDIA"}
        onClick={() => setFeedType("MEDIA")}
      />
    </div>
  );
};
