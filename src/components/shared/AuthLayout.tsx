import type { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface AuthLayoutProps {
  children: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  
  return (
    <>
      <Toaster position="top-center" />
      <main className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
        {children}
      </main>
    </>
  )
};