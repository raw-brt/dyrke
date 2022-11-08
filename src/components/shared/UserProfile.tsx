import { Profile } from "@generated/types";
import { useState } from "react";
import type { FC } from "react";
import { getAvatar } from "@lib/getAvatar";
import clsx from "clsx";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { Slug } from "./Slug";
import Markup from "./Markup";
import { Link } from "react-router-dom";

interface Props {
  profile: Profile,
  showBio?: boolean,
  showFollow?: boolean,
  followStatusLoading?: boolean,
  isFollowing?: boolean,
  isBig?: boolean,
  linkToProfile?: boolean
}

export const UserProfile: FC<Props> = ({ 
  profile,
  showBio = false,
  showFollow = false,
  followStatusLoading = false,
  isFollowing = false,
  isBig = false,
  linkToProfile = true
 }) => {
  const [following, setIsFollowing] = useState(isFollowing);

  const UserInfo: FC = () => (
    <div className="flex items-center space-x-3">
      <img
        src={getAvatar(profile)}
        loading="lazy"
        className={clsx(
          isBig ? "w-14 h-14" : "w-10 h-10",
          "bg-gray-200 rounded-full border dark:border-gray-700/80"
        )}
        height={isBig ? 56 : 40}
        width={isBig ? 56 : 40}
        alt={profile?.handle}
      />
      <div>
        <div className="flex gap-1 items-center max-w-sm truncate">
          <div className={clsx(isBig ? "font-bold" : "text-md")}>{profile?.name ?? profile?.handle}</div>
        </div>
        <Slug className="text-sm" slug={profile?.handle} prefix="@" />
        {showBio && profile?.bio && (
          <div className={clsx(isBig ? "text-base" : "text-sm", "mt-2", "linkify leading-6")}>
            <Markup>{profile?.bio}</Markup>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex justify-between items-center">
      {/* // If linkToProfile, set sidebar store to load it */}
      <UserInfo />
      {/* Code here follow/unfollow logic */}
    </div>
  )
 };