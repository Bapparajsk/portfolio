"use client";

import { Link } from "@/lib/next";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/assets/icons";
import {
  AnimatePresence,
  MotionDiv,
  useMotionValue,
  useSpring,
  useTransform,
} from "@/lib/motion";
import { links } from "@/app/data";

const classIcon = "h-full w-full text-neutral-500";

const getItems = (name, isDark) => {
  return links.filter((item) => {
    item.className = cn(classIcon, isDark && "dark:text-neutral-300");
    return item.title.toLowerCase() !== name.toLowerCase();
  });
}

export const FloatingDock = ({
  pathName,
  desktopClassName,
  isDark = true,
}) => {

  const items = getItems(pathName, isDark);

  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} isDark={isDark}/>
    </>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  isDark
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <MotionDiv
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto h-16 gap-4 items-end hidden sm:flex  rounded-2xl bg-gray-50 px-4 pb-3 shadow-lg",
        className,
        isDark && "dark:bg-neutral-900"
      )}
    >
      {items.map((item) => (
        <IconContainer isDark={isDark} mouseX={mouseX} key={item.title} {...item} />
      ))}
    </MotionDiv>
  );
};

function IconContainer({
  mouseX,
  title,
  iconName,
  className,
  href,
  isDark,
}) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20]
  );

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const target = href.startsWith("http") ? "_blank" : "_self";

  return (
    <Link href={href} target={target} className="nav-button cursor-none">
      <MotionDiv
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn("aspect-square rounded-full  bg-gray-200 flex items-center justify-center relative", isDark && "dark:bg-neutral-800")}
      >
        <AnimatePresence>
          {hovered && (
            <MotionDiv
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className={cn(
                "px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs shadow-md",
                isDark && "dark:bg-neutral-800 dark:border-neutral-900 dark:text-white"
              )}
            >
              {title}
            </MotionDiv>
          )}
        </AnimatePresence>
        <MotionDiv
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {getIcon({name: iconName, className})}
        </MotionDiv>
      </MotionDiv>
    </Link>
  );
}
