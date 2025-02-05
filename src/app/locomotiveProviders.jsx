"use client";

import { useEffect } from "react";

export default function LocomotiveProviders({ children }) {
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
  return <>{children}</>;
}
