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
import { usePathname, useRouter } from "next/navigation";
import { ButtonList, ButtonListColorMap } from "@/app/data";
import { getIcon } from "@/assets/icons";
import { cn } from "@/lib/utils";
import { ThemeButton } from "./ThemeButton";
import { CursorButton } from "./CursorButton";
import { ResumeButton } from "./ResumeButton";

const parentVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.3 },
    },
};

export const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const pathName = usePathname();
    const router = useRouter();


    if (pathName === '/') return null;

    const SlideTabsNavItems = ButtonList.slice(0, ButtonList.length / 2);
    const externalLinks = ButtonList.slice(ButtonList.length / 2, ButtonList.length);

    const onClickLinkHandler = (link) => {
        setIsMenuOpen(false)
        if (link === "#") {
            const a = document.createElement('a');
            a.href = "/bapparaj-resume.pdf";
            a.download = 'bapparaj-resume.pdf';
            a.click();
            addToast({
                title: 'Resume Downloaded',
                description: 'Resume is being downloaded.',
                type: 'success',
                color: "success",
                duration: 3000,
            });
            return;
        }

        if (link.startsWith('http')) {
            window.open(link, '_blank');
        } else {
            router.push(link);
        }
    }

    return (
        <Navbar 
            isMenuOpen={isMenuOpen} 
            onMenuOpenChange={setIsMenuOpen} 
            isBordered disableScrollHandler
            // className="h-[50px] sm:h-[66px]"
        >
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <Link href={"/"} className="cursor-none font-bold text-medium md:text-xl lg:text-2xl text-paragraph">
                        Bapparaj
                    </Link>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <SlideTabs pathName={pathName} item={SlideTabsNavItems} />
            </NavbarContent>
            <NavbarContent justify="end" className="gap-2">
                <ThemeButton />
                <ResumeButton />
                <CursorButton sensitivity={7} />
            </NavbarContent>
            <NavbarMenu>
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="show"
                    className="w-full"
                >
                    {SlideTabsNavItems.map((item, index) => (
                        <motion.div key={`${item}-${index}`} variants={childVariants}>
                            <NavbarMenuItem>
                                <div className="w-full flex gap-2 py-2" onClick={() => onClickLinkHandler(item.link)}>
                                    {getIcon({ name: item.icon })}
                                    {item.label}
                                </div>
                            </NavbarMenuItem>
                        </motion.div>
                    ))}

                    <motion.div className="w-full h-[2px] bg-black" variants={childVariants} />

                    {externalLinks.map((item, index) => (
                        <motion.div key={`${item}-${index}`} variants={childVariants}>
                            <NavbarMenuItem>
                                <div className="w-full flex gap-2 py-2" onClick={() => onClickLinkHandler(item.link)}>
                                    {getIcon({ name: item.icon })}
                                    {item.label}
                                </div>
                            </NavbarMenuItem>
                        </motion.div>
                    ))}
                </motion.div>
            </NavbarMenu>
        </Navbar>
    );
}

export const SlideTabs = ({ pathName, item }) => {
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
                        <span className="hidden md:block">{item.label}</span>
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
