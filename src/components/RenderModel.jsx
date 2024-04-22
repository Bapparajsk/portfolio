'use client'

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import clsx from 'clsx'
import {Environment} from "@react-three/drei";

export const RenderModel = ({ children, className }) => {
    return (
        <Canvas
            className={clsx('w-screen, -z-10 h-full, relative', className)}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}
