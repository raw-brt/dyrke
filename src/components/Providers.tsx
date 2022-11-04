import type { ReactNode } from "react";
import { WagmiConfig } from "wagmi";
import { queryClient } from "src/config/reactQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { wagmiClient } from "src/config/wagmiClient";
import { BrowserRouter } from "react-router-dom"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig client={wagmiClient}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </WagmiConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};