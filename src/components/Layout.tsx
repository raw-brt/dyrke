import type { FC, ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { AuthenticatedLayout } from "./shared/AuthenticatedLayout";
import { AuthLayout } from "./shared/AuthLayout";
import { UnauthLayout } from "./shared/UnauthLayout";

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

  const location = useLocation();
  
  return location.pathname === "/login" ? (
    <UnauthLayout>
      {children}
    </UnauthLayout>
  ) : (
    // <AuthLayout>
    //   {children}
    // </AuthLayout>
    <AuthenticatedLayout />
  )
};