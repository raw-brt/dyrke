import clsx from "clsx";
import type { FC } from "react";
import { DyrkePublication } from "../../../generated/dyrketypes";
import { ElectedMirror } from "../../../generated/types";
import { useProfileStore } from "../../../store/profiles";
import Collect from "./Collect";
import { Comment } from "./Comment";
import Like from "./Like";
import PublicationMenu from "./Menu";
import Mirror from "./Mirror";

interface Props {
  publication: DyrkePublication;
  isFullPublication?: boolean;
  electedMirror?: ElectedMirror;
}

const PublicationActions: FC<Props> = ({
  publication,
  electedMirror,
  isFullPublication = false,
}) => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const collectModuleType = publication?.collectModule.__typename;
  const canMirror = currentProfile ? publication?.canMirror?.result : true;

  return (
    <span
      className={clsx(
        { "justify-between": isFullPublication },
        "flex gap-6 items-center pt-3 -ml-2 text-gray-400 sm:gap-8",
      )}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <Comment publication={publication} isFullPublication={isFullPublication} />
      {canMirror && <Mirror publication={publication} isFullPublication={isFullPublication} />}
      <Like publication={publication} isFullPublication={isFullPublication} />
      {collectModuleType !== "RevertCollectModuleSettings" &&
        collectModuleType !== "UnknownCollectModuleSettings" && (
          <Collect
            electedMirror={electedMirror}
            publication={publication}
            isFullPublication={isFullPublication}
          />
        )}
      <PublicationMenu publication={publication} isFullPublication={isFullPublication} />
    </span>
  );
};

export default PublicationActions;