import { DyrkePublication } from "@generated/dyrketypes";
import { ElectedMirror, FeedItem } from "@generated/types";
import dayjs from "dayjs";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import EventType from "../Profile/EventType";
import { UserProfile } from "../Shared/UserProfile";
import PublicationActions from "./Actions";
import { HiddenPublication } from "./HiddenPublication";
import PublicationBody from "./PublicationBody";
import { PublicationType } from "./Type";

interface Props {
  publication: DyrkePublication,
  feedItem?: FeedItem,
  showType?: boolean,
  showActions?: boolean,
  showModActions?: boolean,
  showThread?: boolean
}

export const SinglePublication: FC<Props> = ({
  publication,
  feedItem,
  showType = true,
  showActions = true,
  showModActions = false,
  showThread = true
}) => {
  const navigate = useNavigate();
  const isMirror = publication.__typename === "Mirror";
  const firstComment = feedItem?.comments && feedItem.comments[0];
  const rootPublication = feedItem ? (firstComment ? firstComment : feedItem?.root) : publication;
  const profile = feedItem
    ? rootPublication.profile
    : isMirror
    ? publication?.mirrorOf?.profile
    : publication?.profile;
  const timestamp = feedItem
    ? rootPublication.createdAt
    : isMirror
    ? publication?.mirrorOf?.createdAt
    : publication?.createdAt;

  return (
    <article className="hover:bg-gray-700 cursor-pointer first:rounded-t-xl last:rounded-b-xl py-5">
      {
        feedItem ? (
          <EventType 
            feedItem={feedItem} 
            showType={showType} 
            showThread={showThread} 
          />
        ) : (
          <PublicationType 
            publication={publication} 
            showType={showType} 
            showThread={showThread} 
          />
        )
      }
      <div className="flex justify-between pb-4 space-x-1.5 px-4 text-gray-100 font-semibold">
        <span onClick={(event) => event.stopPropagation()}>
          <UserProfile profile={profile ?? publication?.collectedBy?.defaultProfile} />
        </span>
        <span className="text-xs text-gray-400">
          {dayjs(new Date(timestamp)).fromNow()}
        </span>
      </div>
      <div className="ml-[53px]" onClick={() => navigate(`/posts/${rootPublication?.id}`)}>
        {rootPublication?.hidden ? (
          <HiddenPublication type={publication.__typename} />
        ) : (
          <>
            <PublicationBody 
              publication={rootPublication as DyrkePublication}
            />
            {
              showActions && (
                <PublicationActions 
                  publication={rootPublication as DyrkePublication}
                  electedMirror={feedItem?.electedMirror as ElectedMirror}
                />
              )
            }
          </>
        )
      }
      </div>
    </article>
  );
}