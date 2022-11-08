import type { FC } from "react";
import { Spinner } from "./Spinner";

export const InfiniteLoader: FC = () => {
  return (
    <span className="flex justify-center p-5">
      <Spinner size="sm" />
    </span>
  );
};