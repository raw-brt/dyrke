/* eslint-disable no-constant-condition */
import clsx from "clsx";
import type { FC } from "react";
import { useLocation } from "react-router-dom";

interface Props {
  location: string,
  value: number | undefined;
  delta?: number;
  contextualCounter?: boolean;
  contextualValue?: number;
  searchField: boolean;
}

type Location = "Followers" | "Following" | "Publications" | null;

export const PageHeader: FC<Props> = ({
  location = "Followers",
  value,
  delta,
  contextualCounter,
  contextualValue,
  searchField,
}) => {

  return (
    <div className='w-full h-auto flex flex-col justify-start items-start space-y-4'>
      {/* Metric */}
      <div className='w-full h-auto flex flex-col justify-start items-start space-y-2'>
        <p className='font-medium text-xl text-gray-50 text-left'>{location}</p>
        {delta ? (
          <p className='font-bold text-xl text-gray-50 text-left'>
            {value}{" "}
            <span
              className={clsx(
                delta > 0 ? "text-primary-500" : "text-red-500",
                "font-medium text-xl",
              )}
            >
              {delta.toLocaleString()}
            </span>
          </p>
        ) : (
          <p className='font-bold text-3xl text-gray-50 text-left'>{value && value.toLocaleString()}</p>
        )}
        {contextualCounter && (
          <p className='w-full h-auto text-left text-gray-400'>{contextualValue}</p>
        )}
      </div>
    </div>
  );
};
