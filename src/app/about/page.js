"use client";

import React from "react";
import { AboutDetails } from "@/components/about/index";
import MainProjects from "@/components/about/MainProjects";
import { LampContainer } from "@/components/ui/lamp";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Skills } from "@/components/about/Skills";

const NavLink = motion.create(Link);

export default function page() {

    React.useEffect(() => {
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

    return (
        <main className={'w-full bg-slate-950'}>
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
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className={'w-full h-auto dd'}>
                <LampContainer>
                    <motion.h1
                        initial={{ opacity: 0.5, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl "
                    >
                        About Me <br/>
                        <span className="text-2xl font-normal text-neutral-500">I am a Software Engineer</span>
                    </motion.h1>
                </LampContainer>

            </div>
            <div className="w-full h-auto overflow-x-hidden">
                <AboutDetails />
            </div>
            <MainProjects />
            <Skills />
            <div data-scroll data-scroll-section data-scroll-speed="1.5" className={"w-full h-[200vh] bg-red-500"}></div>
            {/* <footer>
                <div className={`flex items-center justify-center h-[35rem] md:h-[200px]  w-full`}>
                    <FloatingDock
                        pathName={"about"}
                    />
                </div>
            </footer> */}
        </main>
    );
}
