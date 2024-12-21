"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

// const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), { ssr: false });

export const Loco = () => {
    useEffect(() => {
        let locomotiveScroll;
    
        if (typeof window !== "undefined") {
          const Locomotive = async () => {
            const LocomotiveScroll = (await import("locomotive-scroll")).default;
    
            locomotiveScroll = new LocomotiveScroll();
          };
    
          Locomotive();
    
          // Cleanup on component unmount
          return () => {
            if (locomotiveScroll) locomotiveScroll.destroy();
          };
        }
      }, []);
    return (
        <div>loco</div>
    )
}
