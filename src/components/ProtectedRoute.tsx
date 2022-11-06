import type { FC } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useProfileStore } from "src/store/profiles";


export const ProtectedRoute: FC = (): JSX.Element => {
  const currentProfile = useProfileStore((state) => state.currentProfile);
  const navigate = useNavigate();

  if (!currentProfile) {
    navigate("/login", { replace: true });
  }

  return <Outlet />;
};