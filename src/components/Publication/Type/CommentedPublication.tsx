
import { DyrkePublication } from "@generated/dyrketypes";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

import type { FC } from "react";
import { Link } from "react-router-dom";
import { Slug } from "src/components/Shared/Slug";

interface Props {
  publication: DyrkePublication;
}

export const CommentedPublication: FC<Props> = ({ publication }) => {
  const sourceId = publication?.commentOn?.id;
  const sourceProfileHandle = publication?.commentOn?.profile?.handle;

  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <ChatBubbleLeftIcon className="w-4 h-4" />
      <Link to={`/posts/${sourceId}`}>
        Commented on {publication?.commentOn?.__typename?.toLowerCase()} by
      </Link>
      <Link to={`/u/${sourceProfileHandle}`}>
        <Slug slug={sourceProfileHandle} prefix="@" />
      </Link>
    </div>
  );
};
