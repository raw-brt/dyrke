import { getIPFSLink } from "../../lib/getIPFSLink";
import type { FC } from "react";
import { STATIC_ASSETS } from "../../config/constants";

interface Props {
  cover: string;
}

const Cover: FC<Props> = ({ cover }) => {

  return (
    <div
      className="h-32 sm:h-32"
      style={{
        backgroundImage: `url(${
          cover ? getIPFSLink(cover) : `${STATIC_ASSETS}/patterns/2.svg`
        })`,
        backgroundColor: "#374151",
        backgroundSize: cover ? "cover" : "30%",
        backgroundPosition: "top top",
        backgroundRepeat: cover ? "no-repeat" : "repeat"
      }}
    />
  );
};

export default Cover;
