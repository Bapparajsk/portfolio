'use client'

import React from "react";
import {RenderModel} from "@/components/RenderModel";
import {AboutModel} from "@/components/models/AboutModel";
import AboutDetails from "@/components/about/index";
import Link from "next/link";
import {Home} from "lucide-react";
import {motion} from "framer-motion";

const NavLink = motion(Link);

export default function page() {

    return (
        <main className={'w-full h-full overflow-x-hidden py-20 px-8 xs:px-16 lg:px-32'}>
            <div className={'w-full md:h-3/5 xs:h-3/4 sm:h-screen  relative'}>
                <RenderModel>
                    <AboutModel/>
                </RenderModel>
                <div className={'absolute w-full top-2/3 sm:top-[60%]  flex flex-col items-center justify-center'}>
                    <h1 className={'text-6xl xs:text-7xl sm:text-8xl lg:text-9xl font-roboto font-bold text-[#7A0BC0]'}>Bapparaj</h1>
                    <p className={'font-light text-foreground text-ls mt-3 tracking-[1px]'}>Welcome to My Portfolio</p>
                </div>
                <div className={'fixed top-5 left-2 z-[100]'}>
                    <NavLink
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        transition={{delay: 0.2, duration: 0.2}}
                        href={'/'}
                        className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                        <Home className={'w-[20px] h-[20px]'} strokeWidth={1.5}/>
                    </NavLink>
                </div>
            </div>
            <AboutDetails/>
        </main>
    )
}
