
import { DyrkePublication } from "@generated/dyrketypes";
import type { Comment, FeedItem } from "@generated/types";
import type { FC } from "react";
import { ThreadBody } from "src/components/Publication/ThreadBody";

interface Props {
  feedItem: FeedItem;
}

const Commented: FC<Props> = ({ feedItem }) => {
  const publication = feedItem.root as Comment;
  const firstComment = feedItem.comments && feedItem.comments[0];

  return firstComment ? (
    <ThreadBody publication={publication as DyrkePublication} />
  ) : publication?.commentOn ? (
    <ThreadBody publication={publication?.commentOn as DyrkePublication} />
  ) : null;
};

export default Commented;
