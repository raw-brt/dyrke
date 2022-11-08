import { useState } from "react";
import type { FC, ReactElement } from "react";
import { useProfileStore } from "src/store/profiles";
import { Profile } from "@generated/types";
import { getAvatar } from "../../lib/getAvatar";
import { Tooltip } from "../UI/Tooltip";
import { CogIcon, HashtagIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Slug } from "../Shared/Slug";
import { Button } from "../UI/Button";
import { Link } from "react-router-dom";
import formatAddress from "../../lib/formatAddress";
import { Following } from "./Following";
import Markup from "../Shared/Markup";
import { getAttribute } from "../../lib/getAttribute";
import { STATIC_ASSETS } from "src/config/constants";
import Badges from "./Badges";
import { Follow } from "../Shared/Follow";
import { Unfollow } from "../Shared/Unfollow";

interface Props {
  profile: Profile;
}

export const Details: FC<Props> = ({ profile }) => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const [following, setFollowing] = useState(profile?.isFollowedByMe);
  const [showMutualFollowersModal, setShowMutualFollowersModal] = useState(false);

  const MetaDetails = ({ children, icon }: { children: ReactElement; icon: ReactElement }) => (
    <div className='flex gap-2 items-center'>
      {icon}
      <div className='truncate text-md'>{children}</div>
    </div>
  );

  const followType = profile?.followModule?.__typename;

  return (
    <div className='px-5 mb-4 space-y-5 sm:px-0'>
      <div className='relative -mt-24 w-32 h-32 sm:-mt-32 sm:w-52 sm:h-52'>
        <img
          src={getAvatar(profile)}
          className='w-32 h-32 bg-gray-200 rounded-xl ring-8 ring-gray-50 sm:w-52 sm:h-52 dark:bg-gray-700 dark:ring-black'
          height={128}
          width={128}
          alt={profile?.handle}
        />
      </div>
      <div className='py-2 space-y-1'>
        <div className='flex gap-1.5 items-center text-2xl font-bold'>
          <div className='truncate'>{profile?.name ?? profile?.handle}</div>
        </div>
        <div className='flex items-center space-x-3'>
          {profile?.name ? (
            <Slug className='text-sm sm:text-base' slug={profile?.handle} prefix='@' />
          ) : (
            <Slug className='text-sm sm:text-base' slug={formatAddress(profile?.ownedBy)} />
          )}
          {currentProfile && currentProfile?.id !== profile?.id && profile?.isFollowing && (
            <div className='py-0.5 px-2 text-xs bg-gray-200 rounded-full dark:bg-gray-700'>
              Follows you
            </div>
          )}
        </div>
      </div>
      <div className='space-y-5'>
        <Following profile={profile} />
        <div>
          {currentProfile?.id === profile?.id ? (
            <Link to='/settings'>
              <Button variant='secondary' icon={<CogIcon className='w-5 h-5' />} outline>
                Edit Profile
              </Button>
            </Link>
          ) : followType !== "RevertFollowModuleSettings" ? (
            following ? (
              <div className='flex space-x-2'>
                <Unfollow />
              </div>
            ) : (
              <div className='flex space-x-2'>
                <Follow />
              </div>
            )
          ) : null}
        </div>
        {profile?.bio && (
          <div className='mr-0 sm:mr-10 leading-md linkify text-md'>
            <Markup>{profile?.bio}</Markup>
          </div>
        )}
        <div className='w-full divider' />
        <div className='space-y-2'>
          <MetaDetails icon={<HashtagIcon className='w-4 h-4' />}>
            <Tooltip content={`#${parseInt(profile?.id)}`}>{profile?.id}</Tooltip>
          </MetaDetails>
          {getAttribute(profile?.attributes, "location") && (
            <MetaDetails icon={<MapPinIcon className='w-4 h-4' />}>
              {getAttribute(profile?.attributes, "location") as any}
            </MetaDetails>
          )}
          {profile?.onChainIdentity?.ens?.name && (
            <MetaDetails
              icon={
                <img
                  src={`${STATIC_ASSETS}/brands/ens.svg`}
                  className='w-4 h-4'
                  height={16}
                  width={16}
                  alt='ENS Logo'
                />
              }
            >
              {profile?.onChainIdentity?.ens?.name}
            </MetaDetails>
          )}
          {getAttribute(profile?.attributes, "website") && (
            <MetaDetails
              icon={
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getAttribute(
                    profile?.attributes,
                    "website",
                  )
                    ?.replace("https://", "")
                    .replace("http://", "")}`}
                  className='w-4 h-4 rounded-full'
                  height={16}
                  width={16}
                  alt='Website'
                />
              }
            >
              <a
                href={`https://${getAttribute(profile?.attributes, "website")
                  ?.replace("https://", "")
                  .replace("http://", "")}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                {getAttribute(profile?.attributes, "website")
                  ?.replace("https://", "")
                  .replace("http://", "")}
              </a>
            </MetaDetails>
          )}
          {getAttribute(profile?.attributes, "twitter") && (
            <MetaDetails
              icon={<img
                      src={`${STATIC_ASSETS}/brands/twitter-light.svg`}
                      className='w-4 h-4'
                      height={16}
                      width={16}
                      alt='Twitter Logo'
                    />  
              }
            >
              <a
                href={`https://twitter.com/${getAttribute(profile?.attributes, "twitter")}`}
                target='_blank'
                rel='noreferrer noopener'
              >
                {getAttribute(profile?.attributes, "twitter")?.replace("https://twitter.com/", "")}
              </a>
            </MetaDetails>
          )}
        </div>
      </div>
      <Badges profile={profile} />
    </div>
  );
};
