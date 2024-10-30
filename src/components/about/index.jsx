"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import IconCloud from "../ui/Interact-iveIcon-cloud";
import { ImponentText } from "../ui/imponent-text";
import { slugs } from "@/app/data";


export function AboutDetails() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full px-10">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-auto bg-[#4B70F5]/50 min-h-[400px] lg:min-h-[250px]" >
                <div>
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        About Me
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        I'm a passionate software engineer skilled in <ImponentText
                        words={"Java, JavaScript, TypeScript,"}/> ans <ImponentText words={"Node.js"}/>. I specialize in
                        full-stack development, working with frameworks like <ImponentText
                        words={"React.js, Next.js, Express, Tailwind CSS, SASS, "}/>, ans <ImponentText
                        words={"Framer Motion"}/> .
                        My experience includes working with <ImponentText
                        words={"AWS, Google Cloud, Firebase, BullMQ,"}/>and <ImponentText words={"MongoDB"}/>.
                        My experience spans across <ImponentText
                        words={"AWS, Google Cloud, Firebase, BullMQ,"}/> ans <ImponentText words={"MongoDB"}/>.
                        <br/>
                        <br/>
                        I've created impactful projects, including <ImponentText words={"my-own-facebook"}/> and
                        an <ImponentText words={"animated 3D portfolio"}/>, showcasing both technical expertise and
                        creativity. With over <ImponentText words={"900+ problems solved on LeetCode"}/>, I continually
                        enhance my problem-solving abilities and stay eager to take on new challenges.
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[250px] ">
                <div className={'w-full h-full flex flex-col justify-evenly items-center'}>
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl '}>
                        6+ <sub className={'font-semibold text-base'}>Project</sub>
                    </p>
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl'}>
                        1+ <sub className={'font-semibold text-base'}>years of experience</sub>
                    </p>
                </div>
            </WobbleCard>
            <WobbleCard isShadow={false} containerClassName="flex justify-center items-center col-span-1 lg:col-span-2 bg-blue-900 h-auto lg:min-h-[500px] xl:min-h-[300px]">
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
                containerClassName="col-span-1 lg:col-span-1 h-fit bg-pink-800 min-h-[200px] lg:min-h-[200px]"
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
                    src="https://github-readme-stats.vercel.app/api/pin/?username=bapparajsk&repo=my-own-facebook&description_lines_count=2&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=FFFFFF&text_bold=false"
                    width={100}
                    height={80}
                    alt="linear demo image"
                    className="object-center scale-[1.1] sm:scale-[2] w-full h-[100px]"
                />
            </WobbleCard>
        </div>
    );
}
