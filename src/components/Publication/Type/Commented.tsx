
import { DyrkePublication } from "@generated/dyrketypes";
import type { FC } from "react";
import { ThreadBody } from "../ThreadBody";

interface Props {
  publication: DyrkePublication;
}

export const Commented: FC<Props> = ({ publication }) => {
  const commentOn: DyrkePublication | any = publication?.commentOn;
  const mainPost = commentOn?.mainPost;

  return (
    <>
      {mainPost ? <ThreadBody publication={mainPost} /> : null}
      <ThreadBody publication={commentOn} />
    </>
  );
};
