import type { ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { queryClient } from "src/config/reactQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { wagmiClient } from "src/config/wagmiClient";
import { BrowserRouter } from "react-router-dom"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </WagmiConfig>
    </QueryClientProvider>
  );
};