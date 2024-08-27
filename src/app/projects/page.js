'use client'

import React from "react";
import { Home } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsList } from "@/components/projects/Index";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const NavLink = motion(Link);

export default function page() {

    return (
        <main className={'w-full h-auto overflow-x-hidden overflow-y-auto'}>
            <div className={'fixed top-2 left-2 z-[100]'}>
                <NavLink
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    href={'/'}
                    className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                    <Home className={'w-[20px] h-[20px]'} strokeWidth={1.5} />
                </NavLink>
            </div>
            <HeroParallax />;
            <div className="overflow-hidden">
                <MacbookScroll />
            </div>
            <ProjectsList />
            <footer>
                <div className={`flex items-center justify-center h-[35rem] md:h-[200px]  w-full`}>
                    <FloatingDock
                        pathName={"projects"}
                    />
                </div>
            </footer>
        </main>
    )
}
