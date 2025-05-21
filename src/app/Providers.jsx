'use client'

import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from "react";
import { LocomotiveProviders } from "./locomotiveProviders";

export function Providers( { children }) {

    const [queryClient] = useState(() => new QueryClient());

    return (
        <HeroUIProvider>
            <ToastProvider maxVisibleToasts={5}/>
            <QueryClientProvider client={queryClient}>
                {children} 
            </QueryClientProvider>
        </HeroUIProvider>
    );
}
