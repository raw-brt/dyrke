import clsx from "clsx";
import type { FC } from "react";
import { useState } from "react";

export const AudienceItem: FC<any> = ({ index, wallet }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { address, defaultProfile } = wallet;

  return (
    <li className={clsx("flex lg:w-full lg:flex-row lg:justify-start lg:items-center", index % 2 === 0 ?"bg-gray-800" : "bg-transparent")}>
      {/* Handle */}
      <p className='flex lg:flex-row lg:justify-start lg:items-center text-primary-500 w-full max-w-[14rem]'>
        {defaultProfile?.handle ?? "No handle"}
      </p>
      {/* Profile */}
      <div className="flex lg:flex-col justify-start items-start"></div>
      {/* Publications */}
      <p className='flex lg:flex-row lg:justify-start lg:items-center text-gray-100 text-right'>
        {defaultProfile?.stats?.totalPublications ?? "-"}
      </p>
      {/* Followers */}
      <p className='flex lg:flex-row lg:justify-start lg:items-center text-gray-100 text-right'>
        {defaultProfile?.stats?.totalFollowers ?? "-"}
      </p>
    </li>
  );
};
