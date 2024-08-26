'use client'

import React from "react";
import { RenderModel } from "@/components/RenderModel";
import { ProjectModel } from "@/components/models/ProjectModel";
import { ProjectsList } from "@/components/projects/Index";
import { Home } from 'lucide-react';
import Link from "next/link";
import { motion } from "framer-motion";
import { TextEffect } from "@/components/ui/TextEffect";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconAlignBoxLeftTop,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconHome,
    IconUser,
    IconPhone,
    IconBrandLeetcode
} from "@tabler/icons-react";

const NavLink = motion(Link);



export default function page() {

    return (
        <main className={'w-full h-full overflow-x-hidden overflow-y-auto'}>
            <div className={'w-full h-screen relative'}>
                <RenderModel>
                    <ProjectModel />
                </RenderModel>
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
                <div className={"absolute bottom-10 left-[50%] translate-x-[-50%]"}>
                    <button className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                        <TextEffect per='char' preset='fade' >
                            Animate your ideas with motion-primitives
                        </TextEffect>
                    </button>
                </div>
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
