import { DyrkePublication } from "@generated/dyrketypes";
import { ElectedMirror } from "@generated/types";
import { useEffect, useState } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "@components/UI/Tooltip";
import { RectangleStackIcon as RectangleStackSolid } from "@heroicons/react/24/solid";
import { RectangleStackIcon } from "@heroicons/react/24/outline";
import nFormatter from "@lib/nFormatter";
import { Modal } from "@components/UI/Modal";
import humanize from "@lib/humanize";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";


interface Props {
  publication: DyrkePublication;
  isFullPublication: boolean;
  electedMirror?: ElectedMirror;
}

const Collect: FC<Props> = ({ publication, isFullPublication, electedMirror }) => {
  const [count, setCount] = useState(0);
  const isMirror = publication.__typename === "Mirror";
  const hasCollected = isMirror ? publication?.mirrorOf?.hasCollectedByMe : publication?.hasCollectedByMe;

  useEffect(() => {
    if (publication?.mirrorOf?.stats?.totalAmountOfCollects || publication?.stats?.totalAmountOfCollects) {
      setCount(
        publication.__typename === "Mirror"
          ? publication?.mirrorOf?.stats?.totalAmountOfCollects
          : publication?.stats?.totalAmountOfCollects
      );
    }
  }, [publication]);

  const iconClassName = isFullPublication ? "w-[17px] sm:w-[20px]" : "w-[15px] sm:w-[18px]";

  return (
    <>
      <motion.button whileTap={{ scale: 0.9 }} onClick={() => showUnderDevelopmentTooltip()} aria-label="Collect">
        <span className="flex items-center space-x-1 text-red-500 hover:red-brand-400">
          <span className="p-1.5 rounded-full hover:bg-red-300 hover:bg-opacity-20">
            <Tooltip
              placement="top"
              content={count > 0 ? `${humanize(count)} Collects` : "Collect"}
              withDelay
            >
              {hasCollected ? (
                <RectangleStackSolid className={iconClassName} />
              ) : (
                <RectangleStackIcon className={iconClassName} />
              )}
            </Tooltip>
          </span>
          {count > 0 && !isFullPublication && (
            <span className="text-[11px] sm:text-xs">{nFormatter(count)}</span>
          )}
        </span>
      </motion.button>
    </>
  );
};

export default Collect;
