'use client'

import React from "react";
import {RenderModel} from "@/components/RenderModel";
import {ProjectModel} from "@/components/models/ProjectModel";
import {ProjectsList} from "@/components/projects/Index";
import { Home } from 'lucide-react';
import Link from "next/link";
import {Button} from "@nextui-org/react";
import { ArrowUpFromDot } from 'lucide-react'
import {ResponsiveComponent} from "@/components/ResponsiveComponent";
import {motion} from "framer-motion";

const NavLink = motion(Link);

export default function page() {

    return (
        <main className={'w-full h-full overflow-x-hidden'}>
            <div className={'w-full h-screen relative'}>
                <RenderModel>
                    <ProjectModel/>
                </RenderModel>
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
            <ProjectsList/>
            <ResponsiveComponent>
                {({size}) => {
                    return size && size > 640 ? (
                        <div className={'w-full h-[80px] flex items-start justify-center'}>
                            <Button
                                color="primary"
                                variant="bordered"
                                className={'text-2xl py-8 px-10'}
                            >
                                End of The Day
                                <ArrowUpFromDot className={'w-full h-auto animate-top-arrow-effect'} strokeWidth={1.5}/>
                            </Button>
                        </div>
                    ) : ('')
                }}
            </ResponsiveComponent>
        </main>
    )
}
