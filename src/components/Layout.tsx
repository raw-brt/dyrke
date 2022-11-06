import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useAuthStore } from "src/store/auth";
import { AuthLayout } from "./shared/AuthLayout";
import { UnauthLayout } from "./shared/UnauthLayout";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const accessToken = useAuthStore((state) => state.authState.accessToken)

  return location.pathname === "/login" || accessToken.length === 0 ? (
    <UnauthLayout>{children}</UnauthLayout>
  ) : (
    <AuthLayout>{children}</AuthLayout>
  );
};
