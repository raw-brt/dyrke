import nFormatter from "../../lib/nFormatter";
import clsx from "clsx";
import type { FC, ReactNode } from "react";

interface Props {
  name: string;
  icon: ReactNode;
  active: boolean;
  count?: number;
  showOnSm?: boolean;
  onClick: () => void;
}

const TabButton: FC<Props> = ({ name, icon, active, count, showOnSm = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        { "text-brand bg-brand-100 bg-gray-700": active },
        "flex items-center space-x-2 rounded-lg text-sm p-4 font-medium text-gray-400 hover:bg-gray-700"
      )}
      aria-label={name}
    >
      {icon}
      <span className={clsx({ "hidden sm:block": !showOnSm })}>{name}</span>
      {count ? (
        <span
          className={clsx(
            { "bg-brand-200 dark:bg-brand-800": active },
            "px-2 text-xs rounded-full bg-gray-200 dark:bg-gray-800"
          )}
        >
          {nFormatter(count)}
        </span>
      ) : null}
    </button>
  );
};

export default TabButton;
