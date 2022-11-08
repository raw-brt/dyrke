import clsx from "clsx";
import type { FC } from "react";

interface Props {
  title?: string,
  error?: Error,
  className?: string
};

export const ErrorMessage: FC<Props> = ({ title, error, className = "" }) => {

  if (!error) return null;

  return (
    <div
      className={clsx("bg-red-900 bg-opacity-10 border-2 border-red-500 border-opacity-50 p-4 space-y-1 rounded-xl", className)}
    >
      {title && <h3 className="text-sm font-medium text-red-200">{title}</h3>}
      <div className="text-sm text-red-200">{error?.message}</div>
    </div>
  );
};