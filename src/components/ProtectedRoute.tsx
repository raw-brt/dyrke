import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useProfileStore } from "src/store/profiles";


export const ProtectedRoute: FC = (): JSX.Element => {
  const currentProfile = useProfileStore((state) => state.currentProfile);

  return (currentProfile ? <Outlet /> : <Navigate to="login" replace />);
};