'use client'

import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "../data";
import Form from "@/components/contact/Form";
import { SparklesCore } from "@/components/ui/sparkles";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";


export default function page() {

    const NavLink = motion(Link);

    const words = [
        { text: "Summon", className: "text-[#7A0BC0] font-semibold md:text-5xl text-3xl lg:text-7xl" },
        { text: "this", className: "text-[#7A0BC0] font-semibold md:text-5xl text-3xl lg:text-7xl" },
        { text: "My", className: "text-[#7A0BC0] font-semibold md:text-5xl text-3xl lg:text-7xl" },
        { text: "Portfolio.", className: "text-blue-500 dark:text-blue-500 font-semibold md:text-5xl text-3xl lg:text-7xl" },
    ];

    return (
        <main className={'w-full h-full overflow-x-hidden py-20 px-8 xs:px-16 lg:px-32 flex flex-col items-center justify-center'}>
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
            <div className="h-[35rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                    <TypewriterEffectSmooth words={words} />
                </h1>
                <div className="w-[30rem] h-40 relative">
                    {/* Gradients */}
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                    <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                    <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                    <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                    />

                    <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                </div>
            </div>
            <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-start relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <Form />
        </main>
    )
}
