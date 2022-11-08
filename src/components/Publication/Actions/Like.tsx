import { DyrkePublication } from "@generated/dyrketypes";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import nFormatter from "@lib/nFormatter";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";
import { FC, useState } from "react";
import { Tooltip } from "src/components/UI/Tooltip";
import { motion } from "framer-motion";

interface Props {
  publication: DyrkePublication;
  isFullPublication: boolean;
}

const Like: FC<Props> = ({ publication, isFullPublication }) => {
  const isMirror = publication.__typename === "Mirror";
  const [liked] = useState(
    (isMirror ? publication?.mirrorOf?.reaction : publication?.reaction) === "UPVOTE"
  );
  const [count] = useState(
    isMirror ? publication?.mirrorOf?.stats?.totalUpvotes : publication?.stats?.totalUpvotes
  );

  const iconClassName = isFullPublication ? "w-[17px] sm:w-[20px]" : "w-[15px] sm:w-[18px]";

  return (
    <motion.button whileTap={{ scale: 0.9 }} onClick={showUnderDevelopmentTooltip} aria-label="Like">
      <span className="flex items-center space-x-1 text-pink-500">
        <span className="p-1.5 rounded-full hover:bg-pink-300 hover:bg-opacity-20">
          <Tooltip placement="top" content={liked ? "Unlike" : "Like"} withDelay>
            {liked ? <HeartIconSolid className={iconClassName} /> : <HeartIcon className={iconClassName} />}
          </Tooltip>
        </span>
        {count > 0 && !isFullPublication && (
          <span className="text-[11px] sm:text-xs">{nFormatter(count)}</span>
        )}
      </span>
    </motion.button>
  );
};

export default Like;
