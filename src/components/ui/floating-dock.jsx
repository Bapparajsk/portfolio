"use client";

import { Link } from "@/components/next";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  IconAlignBoxLeftTop,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconPhone,
  IconUser,
  IconPalette
} from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionDiv,
  useMotionValue,
  useSpring,
  useTransform,
} from "@/lib/motion";

const clas = "h-full w-full text-neutral-500";

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className={clas} />
    ),
    href: "/",
  },
  {
    title: "About",
    icon: (
      <IconUser className={clas} />
    ),
    href: "/about",
  },
  {
    title: "Projects",
    icon: (
      <IconPalette className={clas} />
    ),
    href: "/projects",
  },
  {
    title: "Contact",
    icon: (
      <IconPhone/>
    ),
    href: "/contact",
  },
  {
    title: "Resume",
    icon: (
      <IconAlignBoxLeftTop/>
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub/>
    ),
    href: "https://github.com/Bapparajsk",
  },

  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin/>
    ),
    href: "https://www.linkedin.com/in/bappa-raj-sk-6a0153233",
  },
  {
    title: "Twitter",
    icon: (
      <IconBrandX/>
    ),
    href: "https://twitter.com/bapparaj007",
  },
  {
    title: "LeetCode",
    icon: (
      <IconBrandLeetcode/>
    ),
    href: "https://leetcode.com/u/Bapparajsk",
  },
];

const getItems = (name, isDark) => {
  return links.filter((item) => {
    item.icon = (
      <item.icon.type className={cn(clas, isDark && "dark:text-neutral-300")} />
    );
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
        "mx-auto flex h-16 gap-4 items-end  rounded-2xl bg-gray-50 px-4 pb-3 shadow-lg",
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
  icon,
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
    <Link href={href} target={target}>
      <MotionDiv
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn("aspect-square rounded-full bg-gray-200 flex items-center justify-center relative", isDark && "dark:bg-neutral-800")}
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
          {icon}
        </MotionDiv>
      </MotionDiv>
    </Link>
  );
}
