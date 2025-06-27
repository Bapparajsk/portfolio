"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, useProgress, OrbitControls, Environment, Preload } from "@react-three/drei";
import { cn } from "@/lib/utils";

export const RenderModel = ({ children, isMainModel = false }) => {
  return (
    <Canvas
      className={cn("w-screen h-full relative cursor-pointer", isMainModel ? "-z-20" : "z-50 " )}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} castShadow />
      <pointLight position={[-2, -2, -2]} intensity={0.5} />
      <Environment preset="city" />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          rotateSpeed={0.5}  // Lower rotation speed
          dampingFactor={0.1}  // Add damping for smooth effect
          enableDamping={true} // Enable damping
        />
          {children}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className="canvas-loader"></span>
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
