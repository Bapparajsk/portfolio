'use client'

import { HeroUIProvider } from "@heroui/system";
import { ToastProvider } from "@heroui/toast";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { useState } from "react";
import { ThemeProvider } from 'next-themes';
import { CursorProvider } from "@/context/CursorContext";

export function Providers({ children }) {

    const [queryClient] = useState(() => new QueryClient());

    return (
        <ThemeProvider attribute="class" defaultTheme="light">
            <HeroUIProvider>
                <ToastProvider maxVisibleToasts={5} />
                <QueryClientProvider client={queryClient}>
                    <CursorProvider>{children}</CursorProvider>
                </QueryClientProvider>
            </HeroUIProvider>
        </ThemeProvider>
    );
}
