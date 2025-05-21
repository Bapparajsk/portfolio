"use client";

import { AboutDetails } from "@/components/about/index";
import MainProjects from "@/components/about/MainProjects";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { MotionH1 } from "@/lib/motion";
import HomeButton from "@/components/ui/homeButton";
import { LocomotiveProviders, useLocomotive } from "../locomotiveProviders";
import TrueFocus from "@/components/ui/TrueFocus";
import { useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

// export const metadata = {
//     title: "Bapparaj | About",
//     description:
//       "Welcome to my portfolio! Powered by Next.js, Three.js, and Tailwind CSS, this site blends creativity with technology. Explore immersive experiences crafted with Three.js, navigate seamlessly with Next.js, and enjoy sleek design with Tailwind CSS. Dive into my projects and discover the fusion of artistry and innovation",
// };

export default function page() {

    return (
        <LocomotiveProviders autoStart={false} >
            <main className={"w-full px-2 md:px-0 bg-slate-950"} >
                <div className={"fixed top-5 left-2 z-[100]"}>
                    <HomeButton />
                </div>
                <div >
                    <div
                        data-scroll
                        data-scroll-section
                        data-scroll-speed="-.7"
                        className={"w-full h-auto dd"}
                    >
                        <LampContainer>
                            <MotionH1
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl "
                            >
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-bold text-white mb-4 flex gap-5">
                                        Hi, I'm a
                                        <TrueFocus
                                            sentence="Software Developer."
                                            manualMode={false}
                                            blurAmount={5}
                                            borderColor="#64D8FA"
                                            animationDuration={0.8}
                                            pauseBetweenAnimations={1}
                                            
                                        />
                                    </div>
                                    <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed tracking-wide">
                                        I build scalable apps that solve real-world problems.
                                    </p>
                                </div>
                            </MotionH1>
                        </LampContainer>
                    </div>
                    <div className="w-full h-auto overflow-x-hidden hidden md:block">
                        <AboutDetails />
                    </div>
                    <div className="w-full h-auto bg-[#010409] relative">
                        <MainProjects />
                        <footer>
                            <div
                                className={`flex items-center justify-center h-[35rem] md:h-[200px] w-full `}
                            >
                                <FloatingDock pathName={"about"} isDark={true} />
                            </div>
                        </footer>
                    </div>
                </div>
                <Lodares />
            </main>
        </LocomotiveProviders>
    );
}


function Lodares() {

    const [scope, animate] = useAnimate();
    const ali = async () => {
        const config = {
            duration: 0.3,
        };

        await new Promise((resolve) => setTimeout(resolve, 700));

        await Promise.all([
            animate("#div1", { borderColor: "transparent" }, { duration: 0 }),
            animate("#div2", { borderColor: "transparent" }, { duration: 0 })
        ]);

        await animate("#progress-bar", { height: "20%" }, { ...config });
        await animate("#progress-bar", { height: "35%" }, { ...config });
        await animate("#progress-bar", { height: "50%" }, { ...config });
        await animate("#progress-bar", { height: "65%" }, { ...config });
        await animate("#progress-bar", { height: "80%" }, { ...config });
        await animate("#progress-bar", { height: "95%" }, { ...config });
        await animate("#progress-bar", { height: "100%" }, { ...config });
        await animate("#progress-bar", { opacity: 0 }, { duration: 0 });
        await animate("#progress-container", { opacity: 0 }, { duration: 0 });

        await Promise.all([
            animate("#div1", { borderColor: "#64D4EE" }, { duration: 0 }),
            animate("#div2", { borderColor: "#64D4EE" }, { duration: 0 }),
        ]);

        await Promise.all([
            animate("#div1", { x: "-105%" }, { duration: 1 }),
            animate("#div2", { x: "105%" }, { duration: 1 }),
            animate("#h3-1", { opacity: 0, }, { duration: 0.5 }),
            animate("#h3-2", { opacity: 0, }, { duration: 0.5 }),
        ]);
    };

    useEffect(() => {
        ali()

        // return () => {
        //     animate.
        // }
    }, []);

    return (
        <div ref={scope} className="absolute w-full h-screen z-50 top-0 left-0 flex justify-between overflow-x-hidden">
            <div id="div1" className="w-1/2 h-screen bg-[#041020] border-r-[2px] border-transparent relative">
                <h3 id="h3-1" className="text-7xl text-white font-bold absolute top-1/2 transform -translate-y-1/2 right-5">
                    About
                </h3>
            </div>
            <div id="div2" className="w-1/2 h-screen  bg-[#041020] border-l-[2px] border-transparent relative">
                <h3 id="h3-2" className="text-7xl text-white font-bold absolute top-1/2 -translate-y-1/2 left-5">
                    Me
                </h3>
            </div>

            <div id="progress-container"
                className="absolute left-1/2 -translate-x-1/2 top-0 h-screen w-5 flex items-center justify-center"
            >
                <div id="progress-bar"
                    className="w-1 h-0 bg-[#64D4EE] rounded-full origin-top"
                />
            </div>
        </div>
    )
}