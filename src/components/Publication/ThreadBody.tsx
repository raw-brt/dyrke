import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import type { FC } from "react";
import { DyrkePublication } from "../../generated/dyrketypes";
import { useNavigate } from "react-router-dom";
import { UserProfile } from "../Shared/UserProfile";
import PublicationActions from "./Actions";
import PublicationBody from "./PublicationBody";
import { HiddenPublication } from "./HiddenPublication";

dayjs.extend(relativeTime);

interface Props {
  publication: DyrkePublication;
}

export const ThreadBody: FC<Props> = ({ publication }) => {
  const navigate = useNavigate();
  const isMirror = publication.__typename === "Mirror";
  const profile = isMirror ? publication?.mirrorOf?.profile : publication?.profile;
  const timestamp = isMirror ? publication?.mirrorOf?.createdAt : publication?.createdAt;

  return (
    <article>
      <div className="flex justify-between space-x-1.5">
        <span onClick={(event) => event.stopPropagation()}>
          <UserProfile profile={profile ?? publication?.collectedBy?.defaultProfile} />
        </span>
        <span className="text-xs text-gray-500">{dayjs(new Date(timestamp)).fromNow()}</span>
      </div>
      <div className="flex">
        <div className="mr-8 ml-5 bg-gray-300 border-gray-300 dark:bg-gray-700 dark:border-gray-700 border-[0.8px] -my-[3px]" />
        <div className="pt-4 pb-5 !w-[85%] sm:w-full" onClick={() => navigate(`/posts/${publication?.id}`)}>
          {publication?.hidden ? (
            <HiddenPublication type={publication.__typename} />
          ) : (
            <>
              <PublicationBody publication={publication} />
              <PublicationActions publication={publication} />
            </>
          )}
        </div>
      </div>
    </article>
  );
};
