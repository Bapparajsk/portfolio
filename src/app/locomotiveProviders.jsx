"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function LocomotiveProviders({ children, autoStart = true }) {
  const scrollRef = useRef();

  const scrollToTop = () => {
    if (scrollInstance) {
      scrollInstance.scrollTo(0, 0, { duration: 0 });
    }
  }

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      lenisOptions: {
        content: scrollRef.current,
        smoothTouch: true,
      },
      autoStart: autoStart,
    });

    setTimeout(() => {
      scroll.start();
    }, 3100);

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
}