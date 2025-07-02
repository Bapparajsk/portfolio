"use client";

import React, { useState, useRef } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@heroui/navbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ButtonList, ButtonListColorMap } from "@/app/data";
import { getIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { ThemeButton } from "./ThemeButton";
import { CursorButton } from "./CursorButton";

const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
];

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();
    

    if (pathName === '/') return null;

    const SlideTabsNavItems = ButtonList.slice(0, ButtonList.length / 2);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} isBordered>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-2xl text-paragraph">
                        Bapparaj
                    </p>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <SlideTabs pathName={pathName} item={SlideTabsNavItems} />
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeButton />
                <CursorButton />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}

const SlideTabs = ({ pathName, item }) => {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    return (
        <ul
            onMouseLeave={() => {
                setPosition((pv) => ({
                    ...pv,
                    opacity: 0,
                }));
            }}
            className="relative mx-auto flex w-fit rounded-full border-2 border-black dark:border-neutral-500 bg-white dark:bg-black p-1"
        >
            {item.map((item, idx) => (
                <Tab setPosition={setPosition} kay={idx} isActive={item.link === pathName} color={ButtonListColorMap[item.icon]}>
                    <Link href={item.link} className="flex gap-2 cursor-none">
                        {getIcon({ name: item.icon })}
                        {item.label}
                    </Link>
                </Tab>
            ))}

            <Cursor position={position} />
        </ul>
    );
};

const Tab = ({ children, setPosition, isActive, color }) => {
    const ref = useRef(null);

    return (
        <li
            ref={ref}
            onMouseEnter={() => {
                if (!ref?.current) return;
                const { width } = ref.current.getBoundingClientRect();
                setPosition({
                    left: ref.current.offsetLeft,
                    width,
                    opacity: 1,
                });
            }}
            className={cn("relative z-10 block font-semibold px-3 py-2 uppercase text-white text-base mix-blend-difference",
                isActive && color
            )}
        >
            {children}
        </li>
    );
};

const Cursor = ({ position }) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute z-0 h-10 rounded-full bg-black dark:bg-white"
        />
    );
};
