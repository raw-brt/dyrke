import type { Mirror } from "@generated/types";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Slug } from "src/components/Shared/Slug";

interface Props {
  publication: Mirror;
}

export const Mirrored: FC<Props> = ({ publication }) => {
  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <ArrowsRightLeftIcon className="w-4 h-4" />
      <Link to={`/u/${publication?.profile?.handle}`} className="max-w-xs truncate">
        {publication?.profile?.name ? (
          <b>{publication?.profile?.name}</b>
        ) : (
          <Slug slug={publication?.profile?.handle} prefix="@" />
        )}
      </Link>
      <Link to={`/posts/${publication?.mirrorOf?.id}`}>
        <span>mirrored the </span>
        <b>{publication?.mirrorOf.__typename?.toLowerCase()}</b>
      </Link>
    </div>
  );
};
