
import { DyrkePublication } from "@generated/dyrketypes";
import type { FC } from "react";
import { Collected } from "./Collected";
import { Commented } from "./Commented";
import { CommentedPublication } from "./CommentedPublication";
import { Mirrored } from "./Mirrored";

interface Props {
  publication: DyrkePublication;
  showType?: boolean;
  showThread?: boolean;
}

export const PublicationType: FC<Props> = ({ publication, showType, showThread = false }) => {
  const type = publication.__typename;
  const isCollected = !!publication?.collectedBy;

  if (!showType) {
    return null;
  }

  console.log("Publication is: ", publication)
  console.log("Publication type is: ", type)

  return (
    <>
      {type === "Mirror" && <Mirrored publication={publication} />}
      {type === "Comment" && !showThread && <CommentedPublication publication={publication} />}
      {type === "Comment" && showThread && !isCollected && <Commented publication={publication} />}
      {isCollected && <Collected publication={publication} />}
    </>
  );
};
