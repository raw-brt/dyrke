import { ChatAlt2Icon } from "@heroicons/react/outline";
import nFormatter from "@lib/nFormatter";
import { motion } from "framer-motion";
import type { FC } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "src/components/UI/Tooltip";
import humanize from "src/lib/humanize";
import { DyrkePublication } from "../../../generated/dyrketypes";

interface Props {
  publication: DyrkePublication;
  isFullPublication: boolean;
}

export const Comment: FC<Props> = ({ publication, isFullPublication }) => {
  const count =
    publication.__typename === "Mirror"
      ? publication?.mirrorOf?.stats?.totalAmountOfComments
      : publication?.stats?.totalAmountOfComments;
  const iconClassName = isFullPublication ? "w-[17px] sm:w-[20px]" : "w-[15px] sm:w-[18px]";

  return (
    <motion.button whileTap={{ scale: 0.9 }} aria-label="Comment">
      <Link to={`/posts/${publication.id}`}>
        <span className="flex items-center space-x-1 text-blue-500">
          <span className="p-1.5 rounded-full hover:bg-blue-300 hover:bg-opacity-20">
            <Tooltip
              placement="top"
              content={count > 0 ? `${humanize(count)} Comments` : "Comment"}
              withDelay
            >
              <ChatAlt2Icon className={iconClassName} />
            </Tooltip>
          </span>
          {count > 0 && !isFullPublication && (
            <span className="text-[11px] sm:text-xs">{nFormatter(count)}</span>
          )}
        </span>
      </Link>
    </motion.button>
  );
};
