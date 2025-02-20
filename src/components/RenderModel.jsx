'use client'

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";
import { cn } from "@/lib/utils";

export const RenderModel = ({ children, className }) => {
    return (
        <Canvas className={cn('w-screen, -z-10 h-full, relative', className)} >
            <Suspense fallback={<CanvasLoader/>}>
                {children}
            </Suspense>
        </Canvas>
    )
}

const CanvasLoader = () => {
    const { progress } = useProgress();
    return (
      <Html
        as='div'
        center
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span className='canvas-loader'></span>
        <p
          style={{
            fontSize: 14,
            color: "#F1F1F1",
            fontWeight: 800,
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    );
  };