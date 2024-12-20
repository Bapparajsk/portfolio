'use client'

import React from "react";
import { AboutDetails } from "@/components/about/index";
import MainProjects from "@/components/about/MainProjects";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { Skills } from "@/components/about/Skills";
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const NavLink = motion.create(Link);

export default function page() {

    const locomotiveScroll = new LocomotiveScroll();

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".dd",
                start: "bottom bottom",
                end: "+=20 bottom",
                scrub: 0.5,
                pinSpacing: true,
            }
        });

        tl.to(".scroll-down-icon", {
            y: 20,
            ease: "linear"
        });
    })

    return (
        <main className={'w-full bg-slate-950'}>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className={'w-full h-auto dd'}>
                <LampContainer icon={
                    <div className={"absolute text-medium bottom-10 left-1/2 cursor-pointer -translate-x-1/2 text-center flex flex-col gap-3 items-center justify-center group"}>
                        <p className="font-ubuntu ">Scroll Down</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="icon icon-tabler scroll-down-icon icons-tabler-filled icon-tabler-arrow-down-rhombus group-hover:animate-scroll-hover-icon">
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none" />
                            <path
                                d="M12.707 2.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.207 2.207v10.17l1.293 -1.291a1 1 0 0 1 1.32 -.083l.094 .083a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.112 .097l-.11 .071l-.114 .054l-.105 .035l-.149 .03l-.117 .006l-.075 -.003l-.126 -.017l-.111 -.03l-.111 -.044l-.098 -.052l-.096 -.067l-.09 -.08l-3 -3a1 1 0 0 1 1.414 -1.414l1.293 1.293v-10.171l-2.207 -2.208a1 1 0 0 1 0 -1.414l2.5 -2.5a1 1 0 0 1 1.414 0" />
                        </svg>
                    </div>
                }>
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
                        Bapparaj Sk <br /> <span className={"text-green-500"}>Software Engineer</span>
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
