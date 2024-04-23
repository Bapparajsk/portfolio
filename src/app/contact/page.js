'use client'

import React from "react";
import Link from "next/link";
import {Home} from "lucide-react";
import Form from "@/components/contact/Form";
import {motion} from "framer-motion";

const NavLink = motion(Link);

export default function page() {

    return (
        <main className={'w-full h-full overflow-x-hidden py-20 px-8 xs:px-16 lg:px-32 flex flex-col items-center justify-center'}>
            <div className={'w-full h-auto relative'}>
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
            <article className={'relative w-full mt-40 flex flex-col items-center justify-center space-y-8'}>
                <div className={'flex flex-col items-center justify-centers space-y-6 w-3/4'}>
                    <h1 className={'text-[#7A0BC0] font-semibold text-center text-4xl capitalize'}>
                        summon this my portfolio
                    </h1>
                    <p className="text-center font-light text-sm xs:text-base">
                        Step into the circle of enchantment and weave your words into the
                        fabric of the cosmos. Whether you seek to conjure collaborations,
                        unlock mysteries, or simply share tales of adventure, your messages
                        are treasured scrolls within this realm. Use the form below to send
                        your missives through the ethereal network, and await the whisper of
                        magic in response.
                    </p>
                </div>
                <Form/>
            </article>
        </main>
    )
}
