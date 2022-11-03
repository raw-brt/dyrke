import type { FC, ReactNode } from "react";
import { Toaster } from "react-hot-toast";

interface LayoutProps {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({ children }) => {

  // Control which layout to show if user is logged
  // Get auth from cache
  // If not logged in layout
  return (
    <>
      <Toaster position="top-center" />
      <main className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
        {children}
      </main>
    </>
  );
};