"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { memo } from "react";
import { AuthProvider } from "../context/AuthProvider";

const queryClient = new QueryClient();

interface ProviderContainerProps {
  children: ReactNode;
}

export const ProviderContainer = memo(
  ({ children }: ProviderContainerProps) => {
    return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>{children}</AuthProvider>
      </QueryClientProvider>
    );
  }
);

ProviderContainer.displayName = "ProviderContainer";
