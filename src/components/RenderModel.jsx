'use client'

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";

export const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={cn('w-screen, -z-10 h-full, relative', className)} >
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}
