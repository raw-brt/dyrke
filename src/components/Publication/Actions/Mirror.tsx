import { LensHubProxy } from "@abis/LensHubProxy";
import { DyrkePublication } from "@generated/dyrketypes";
import { ArrowsRightLeftIcon } from "@heroicons/react/24/outline";
import humanize from "@lib/humanize";
import nFormatter from "@lib/nFormatter";
import clsx from "clsx";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import { Tooltip } from "src/components/UI/Tooltip";
import { UNDER_DEVELOPMENT } from "src/config/constants";
import { useProfileStore } from "src/store/profiles";
import { motion } from "framer-motion";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";

interface Props {
  publication: DyrkePublication;
  isFullPublication: boolean;
}

const Mirror: FC<Props> = ({ publication, isFullPublication }) => {
  const isMirror = publication.__typename === "Mirror";
  const count = isMirror
    ? publication?.mirrorOf?.stats?.totalAmountOfMirrors
    : publication?.stats?.totalAmountOfMirrors;
  const [mirrored, setMirrored] = useState(
    publication?.mirrors?.length > 0 || publication?.mirrorOf?.mirrors?.length > 0
  );

  const iconClassName = isFullPublication ? "w-[17px] sm:w-[20px]" : "w-[15px] sm:w-[18px]";

  return (
    <motion.button whileTap={{ scale: 0.9 }} onClick={() => showUnderDevelopmentTooltip()} aria-label="Mirror">
      <span className={clsx(mirrored ? "text-success-500" : "text-primary-500", "flex items-center space-x-1")}>
        <span
          className={clsx(
            mirrored ? "hover:bg-green-300" : "hover:bg-brand-300",
            "p-1.5 rounded-full hover:bg-opacity-20"
          )}
        >
        <Tooltip placement="top" content={count > 0 ? `${humanize(count)} Mirrors` : "Mirror"} withDelay>
          <ArrowsRightLeftIcon className={iconClassName} />
        </Tooltip>
        </span>
        {count > 0 && !isFullPublication && (
          <span className="text-[11px] sm:text-xs">{nFormatter(count)}</span>
        )}
      </span>
    </motion.button>
  );
};

export default Mirror;
