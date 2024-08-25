"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import IconCloud from "@/components/ui/Interact-iveIcon-cloud";
import { slugs } from "@/app/data";
import { ImponentText } from "@/components/utils/imponent-text";

export function AboutDetails() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-10">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-[#4B70F5]/50 min-h-[500px] lg:min-h-[300px]"
            >
                <div className="">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Architect of Enchantment
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        I'm a passionate software developer skilled 
                        in <ImponentText words={"Java, JavaScript, TypeScript, Node.js, React, Next.js, and SASS"}/>
                        . I specialize in full-stack development using
                        frameworks like <ImponentText words={"Express, Tailwind CSS, SASS, and Framer Motion"}/>. My experience
                        includes working with <ImponentText words={"AWS, Google Cloud, Firebase, BullMQ"}/>, and MongoDB.I've
                        built projects like <ImponentText words={"my-own-facebook"}/>and an <ImponentText words={"animated 3D portfolio"}/> ,
                        showcasing my technical and creative abilities. With over <ImponentText words={"800+ problems solved"}/> on LeetCode,
                        I'm constantly refining my problem-solving skills and eager to tackle new
                        challenges in tech.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px] ">
                <div className={'w-full h-full flex flex-col justify-evenly items-center'}>
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl '}>
                        10+ <sub className={'font-semibold text-base'}>Project</sub>
                    </p>
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl'}>
                        3+ <sub className={'font-semibold text-base'}>years of experience</sub>
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard isShadow={false} containerClassName="flex justify-center items-center col-span-1 lg:col-span-2 bg-blue-900 h-auto lg:min-h-[600px] xl:min-h-[300px]">
                <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden bg-transparent px-20 pb-20 pt-8 ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=bapparajsk&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=7A0BC0&text_bold=false"
                    width={500}
                    height={300}
                    alt="linear demo image"
                    className="object-cover w-full h-auto"
                />
                <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=bapparajsk&theme=dark&hide_border=true&background=EB545400&ring=FFFFFF&currStreakLabel=FFFFFF"
                    width={500}
                    height={300}
                    alt="linear demo image"
                    className="object-cover w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-3 h-fit bg-pink-800 min-h-[300px] lg:min-h-[300px]"
                className=""
            >
                <img
                    src="https://github-readme-stats.vercel.app/api?username=bapparajsk&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
                    width={500}
                    height={300}
                    alt="linear demo image"
                    className="object-cover w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 bg-[#03C4A1]/80 h-auto lg:min-h-[200px] !p-0"
                className=""
            >
                <img
                    src="https://github-readme-stats.vercel.app/api/pin/?username=bapparajsk&repo=portfolio&description_lines_count=2&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
                    width={100}
                    height={80}
                    alt="linear demo image"
                    className="object-center scale-[1.1] sm:scale-[2] w-full h-[100px]"
                />
            </WobbleCard>
        </div>
    );
}
