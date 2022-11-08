import { Post, Comment } from "@generated/types";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import formatAddress from "@lib/formatAddress";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Slug } from "src/components/Shared/Slug";
import { POLYGONSCAN_URL } from "src/config/constants";


interface Props {
  publication: Post | Comment;
}

export const Collected: FC<Props> = ({ publication }) => {
  return (
    <div className="flex items-center pb-4 space-x-1 text-gray-500 text-[13px]">
      <RectangleGroupIcon className="w-4 h-4" />
      {publication?.collectedBy?.defaultProfile ? (
        <Link to={`/u/${publication?.collectedBy?.defaultProfile?.handle}`}>
          {publication?.collectedBy?.defaultProfile?.name ? (
            <b>{publication?.collectedBy?.defaultProfile?.name}</b>
          ) : (
            <Slug slug={publication?.collectedBy?.defaultProfile?.handle} prefix="@" />
          )}
        </Link>
      ) : (
        <a
          href={`${POLYGONSCAN_URL}/address/${publication?.collectedBy?.address}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Slug slug={formatAddress(publication?.collectedBy?.address)} />
        </a>
      )}
      <Link to={`/posts/${publication?.id}`}>
        <span>collected the </span>
        <b>{publication.__typename?.toLowerCase()}</b>
      </Link>
    </div>
  );
};
