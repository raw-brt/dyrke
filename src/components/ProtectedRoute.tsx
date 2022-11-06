import type { FC, ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProfileStore } from "src/store/profiles";

export const ProtectedRoute: FC = () => {

  const currentProfile = useProfileStore((state) => state.currentProfile);

  if (!currentProfile) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};