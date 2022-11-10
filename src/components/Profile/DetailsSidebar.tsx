import { useState } from "react";
import type { FC, ReactElement } from "react";
import { useProfileStore } from "src/store/profiles";
import { Profile } from "@generated/types";
import { Tooltip } from "../UI/Tooltip";
import { CogIcon, HashtagIcon, MapPinIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
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
import { FollowMetrics } from "./FollowMetrics";

interface Props {
  profile: Profile;
}

export const DetailsSidebar: FC<Props> = ({ profile }) => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const [following, setFollowing] = useState(profile?.isFollowedByMe);

  const MetaDetails = ({ children, icon }: { children: ReactElement; icon: ReactElement }) => (
    <div className='flex gap-2 items-center'>
      {icon}
      <div className='truncate text-md'>{children}</div>
    </div>
  );

  return (
    <div className='px-5 mb-4 space-y-5 sm:px-0 text-gray-100'>
      <div className='pt-4'>
        <div className='flex justify-between items-center text-2xl font-bold'>
          <div className='truncate'>{profile?.name ?? profile?.handle}</div>
          <Button variant='secondary' size="sm" icon={<PencilSquareIcon className='w-5 h-5' />} outline>
            Edit
          </Button>
        </div>
      </div>
      <div className='space-y-4'>
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
                className="text-gray-100 hover:text-primary-500"
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
        <FollowMetrics profile={profile} />
      </div>
      <Badges profile={profile} />
    </div>
  );
};
