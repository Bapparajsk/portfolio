'use client'

import React from "react";
import {RenderModel} from "@/components/RenderModel";
import {AboutModel} from "@/components/models/AboutModel";
import {Environment} from "@react-three/drei";
import AboutDetails from "@/components/about/index";
import Link from "next/link";
import {Home} from "lucide-react";



export default function page() {

    return (
        <main className={'w-full h-full overflow-x-hidden py-20 px-32'}>
            <div className={'w-full h-screen relative'}>
                <RenderModel>
                    <AboutModel/>
                </RenderModel>
                <div className={'absolute w-full bottom-24 flex flex-col items-center justify-center'}>
                    <h1 className={'text-9xl font-roboto font-bold text-[#7A0BC0]'}>Bapparaj</h1>
                    <p className={'font-light text-foreground text-ls mt-3 tracking-[1px]'}>Welcome to My Portfolio</p>
                </div>
                <div className={'fixed top-5 left-2 z-[100]'}>
                    <Link href={'/'}
                          className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                        <Home className={'w-[20px] h-[20px]'} strokeWidth={1.5}/>
                    </Link>
                </div>
            </div>
            <AboutDetails/>
        </main>
    )
}
