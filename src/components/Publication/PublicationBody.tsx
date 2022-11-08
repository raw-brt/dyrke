import { DyrkePublication } from "@generated/dyrketypes";
import { EyeIcon } from "@heroicons/react/24/outline";
import getURLs from "@lib/getURLs";
import clsx from "clsx";
import type { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Attachments from "../Shared/Attachments";
import IFramely from "../Shared/IFramely";
import Markup from "../Shared/Markup";

interface Props {
  publication: DyrkePublication;
}

const PublicationBody: FC<Props> = ({ publication }) => {
  const location = useLocation();
  const showMore = publication?.metadata?.content?.length > 450 && location.pathname !== "/posts/[id]";

  return (
    <div className="break-words">
      <Markup
        className={clsx(
          { "line-clamp-5": showMore },
          "whitespace-pre-wrap break-words leading-md linkify text-md"
        )}
      >
        {publication?.metadata?.content}
      </Markup>
      {showMore && (
        <div className="mt-4 text-sm text-gray-500 font-bold flex items-center space-x-1">
          <EyeIcon className="h-4 w-4" />
          <Link to={`/posts/${publication?.id}`}>Show more</Link>
        </div>
      )}
      {publication?.metadata?.media?.length > 0 ? (
        <Attachments attachments={publication?.metadata?.media} publication={publication} />
      ) : (
        publication?.metadata?.content &&
        getURLs(publication?.metadata?.content)?.length > 0 && (
          <IFramely url={getURLs(publication?.metadata?.content)[0]} />
        )
      )}
    </div>
  );
};

export default PublicationBody;
