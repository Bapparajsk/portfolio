'use client'

import React from "react";
import { AboutDetails } from "@/components/about/index";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";

export default function page() {

    const NavLink = motion(Link);

    return (
        <main className={'w-full h-auto bg-slate-950 pb-10'}>
            <div className={'w-full h-auto'}>
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                    >
                        Bapparaj <br /> Welcome to My Portfolio
                    </motion.h1>
                </LampContainer>
                <div className={'fixed top-5 left-2 z-[100]'}>
                    <NavLink
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.2 }}
                        href={'/'}
                        className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                        <Home className={'w-[20px] h-[20px]'} strokeWidth={1.5} />
                    </NavLink>
                </div>
            </div>
            <AboutDetails />
            <footer>
                <div className={`flex items-center justify-center h-[35rem] md:h-[200px]  w-full`}>
                    <FloatingDock
                        pathName={"about"}
                    />
                </div>
            </footer>
        </main>
    );
}
