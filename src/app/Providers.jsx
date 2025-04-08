'use client'

import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";

export function Providers( { children }) {
    return (
        <HeroUIProvider>
            <ToastProvider maxVisibleToasts={5}/>
            {children} 
        </HeroUIProvider>
    );
}
