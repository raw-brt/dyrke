import { Menu } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import { showUnderDevelopmentTooltip } from "@lib/underDevelopmentTooltip";
import clsx from "clsx";
import type { FC } from "react";


const Delete: FC = () => {

  return (
    <Menu.Item
      as="div"
      className={({ active }) =>
        clsx(
          { "dropdown-active": active },
          "block px-4 py-1.5 text-sm text-red-500 m-2 rounded-lg cursor-pointer"
        )
      }
      onClick={() => showUnderDevelopmentTooltip()}
    >
      <div className="flex items-center space-x-2">
        <TrashIcon className="w-4 h-4" />
        <div>Delete</div>
      </div>
    </Menu.Item>
  );
};

export default Delete;
