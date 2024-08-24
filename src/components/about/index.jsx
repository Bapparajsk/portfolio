"use client";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

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
                        My journey in web development is powered by an array of mystical
                        tools and languages, with JavaScript casting the core of my
                        enchantments. I wield frameworks like React.js and Next.js with
                        precision, crafting seamless portals (websites) that connect realms                         (users) across the digital universe. The ancient arts of the
                        Jamstack empower me to create fast, secure, and dynamic experiences,
                        while my design skills ensure every creation is not only functional
                        but visually captivating. Join me as I continue to explore new
                        spells and technologies to shape the future of the web.
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
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 h-auto lg:min-h-[600px] xl:min-h-[300px]">
                <img
                    src="https://skillicons.dev/icons?i=java,js,express,nodejs,npm,linux,html,idea,c,cpp,css,docker,git,github,graphql,linkedin,mongodb,postman,py,react,nextjs,redis,sass,tailwind,threejs,ts,vscode,webpack,webstorm,aws,gcp,firebase"
                    width={500}
                    height={300}
                    alt="linear demo image"
                    className="object-cover w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <img
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=bapparajsk&theme=transparent&hide_border=true&title_color=FFFFFF&text_color=FFFFFF&icon_color=7A0BC0&text_bold=false"
                    width={500}
                    height={300}
                    alt="linear demo image"
                    className="object-cover w-full h-auto"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
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
            <WobbleCard containerClassName="col-span-1 bg-[#F2A07B]/50 min-h-[200px]">
                <img
                    src="https://github-readme-streak-stats.herokuapp.com?user=bapparajsk&theme=dark&hide_border=true&background=EB545400&ring=FFFFFF&currStreakLabel=FFFFFF"
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
                    className="object-center scale-[1.4] sm:scale-[2] w-full h-[100px]"
                />
            </WobbleCard>
        </div>
    );
}
