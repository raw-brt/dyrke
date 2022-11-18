import type { FC } from "react";
import { UserProfileSkeleton } from "./UserProfileSkeleton";

export const PublicationsSkeleton: FC = () => {
  return (
    <div className="p-5 space-y-4">
      <div className="flex justify-between">
        <UserProfileSkeleton />
        <div className="w-20 h-3 rounded-lg bg-gray-500 animate-pulse" />
      </div>
      <div className="space-y-4 ml-[52px]">
        <div className="space-y-2">
          <div className="w-7/12 h-3 rounded-lg bg-gray-500 animate-pulse" />
          <div className="w-1/3 h-3 rounded-lg bg-gray-500 animate-pulse" />
        </div>
        <div className="flex gap-7 pt-3">
          <div className="w-5 h-5 rounded-lg bg-gray-500 animate-pulse" />
          <div className="w-5 h-5 rounded-lg bg-gray-500 animate-pulse" />
          <div className="w-5 h-5 rounded-lg bg-gray-500 animate-pulse" />
        </div>
      </div>
    </div>
  );
};
