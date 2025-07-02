"use client";

import { MotionDiv } from "@/lib/motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export const LampContainer = ({ children, className }) => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".dd",
        start: "bottom 90%",
        end: "+=100 85%",
        scrub: 1,
        pinSpacing: true,
      },
    });

    tl.to(".scroll-down-icon", { y: 30, opacity: 1, scale: 1.3, ease: "linear" }, "start")
      .to(".scroll-down-text", { y: -10, opacity: 0.7, scale: 0.9, ease: "sine.inOut" }, "start");
  });

  return (
    <div
      className={cn(
        "relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full z-0",
        "dark:bg-slate-950 bg-[#f2f7fa] text-black dark:text-white", // base background + text color switching
        className
      )}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left Glow */}
        <MotionDiv
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent dark:from-cyan-500 text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-full left-0 bg-[#f2f7fa] dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-full left-0 bg-[#f2f7fa] dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </MotionDiv>

        {/* Right Glow */}
        <MotionDiv
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 dark:to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-full right-0 bg-[#f2f7fa] dark:bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-full right-0 bg-[#f2f7fa] dark:bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </MotionDiv>

        {/* Shadow layers */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-[#f2f7fa] dark:bg-slate-950 blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-300 dark:bg-cyan-500 opacity-50 blur-3xl"></div>

        {/* Middle Glow */}
        <MotionDiv
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-200 dark:bg-cyan-400 blur-2xl"
        />

        {/* Line */}
        <MotionDiv
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-300 dark:bg-cyan-400"
        />

        {/* Top Layer Mask */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-[#f2f7fa] dark:bg-slate-950" />
      </div>

      {/* Scroll down indicator */}
      <div className="absolute text-medium bottom-10 left-1/2 cursor-pointer -translate-x-1/2 text-center flex flex-col gap-3 items-center justify-center group">
        <p className="font-ubuntu font-semibold scroll-down-text">Scroll Down</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="icon icon-tabler scroll-down-icon icons-tabler-filled opacity-50 icon-tabler-arrow-down-rhombus group-hover:animate-scroll-hover-icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12.707 2.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.207 2.207v10.17l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-10.171l-2.207 -2.208a1 1 0 0 1 0 -1.414l2.5 -2.5a1 1 0 0 1 1.414 0" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
};
