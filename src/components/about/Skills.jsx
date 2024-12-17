"use client";

import { Fragment } from "react"
import { SkilCard } from "@/components/about/SkilCard";
import { skills } from "@/app/data";
import { motion } from "framer-motion";

export const Skills = () => {
  return (
    <div className="container p-5 mx-auto flex flex-col gap-4 items-center justify-center max-w-[900px]" id="ss">
      <CardCover
        left={false}
        items={skills["language"]}
      />
      <CardCover
        left={true}
        items={skills["framework"]}
      />
    </div>
  );
};

function CardCover({ left, items }) {
  return (
      <div className="flex w-full relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-zinc-950 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-zinc-950 after:to-transparent after:content-['']">
      <motion.div
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        initial={{ translateX: left ? "-50%" : 0 }}
        animate={{ translateX: left ? 0 : "-50%" }}
        className="flex flex-none gap-3 pr-16"
      >
        {[1, 2].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((src, alt) => (
              <SkilCard name={src} key={alt} />
            ))}
          </Fragment>
        ))}
      </motion.div>
    </div>
  )
}