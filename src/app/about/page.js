"use client";

import { useEffect } from "react";
import { IconHome } from "@tabler/icons-react";

import { AboutDetails } from "@/components/about/index";
import MainProjects from "@/components/about/MainProjects";
import { Skills } from "@/components/about/Skills";
import { LampContainer } from "@/components/ui/lamp";
import { FloatingDock } from "@/components/ui/floating-dock";
import { ImponentText } from "@/components/ui/imponent-text";
import { MotionH1, MotionLink } from "@/lib/motion";

export default function page() {

    useEffect(() => {
        let locomotiveScroll;
        if (typeof window !== "undefined") {
            const Locomotive = async () => {
                const LocomotiveScroll = (await import("locomotive-scroll")).default;

                locomotiveScroll = new LocomotiveScroll();
            };
            Locomotive();
            // Cleanup on component unmount
            return () => {
                if (locomotiveScroll) locomotiveScroll.destroy();
            };
        }
    }, []);

    return (
        <main className={'w-full px-2 md:px-0'}>
            <div className={'fixed top-5 left-2 z-[100]'}>
                <MotionLink
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    href={'/'}
                    className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                    <IconHome className={'w-[20px] h-[20px]'} strokeWidth={1.5} />
                </MotionLink>
            </div>
            <div data-scroll data-scroll-section data-scroll-speed="-.7" className={'w-full h-auto dd'}>
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
                        About Me <br />
                        <span className="text-2xl font-normal text-neutral-500">I am a Software Engineer</span>
                    </MotionH1>
                </LampContainer>
            </div>
            <div className="w-full h-auto overflow-x-hidden bg-slate-950">
                <AboutDetails />
            </div>
            <div className="w-full h-auto bg-neutral-50">
                <MainProjects />
                <div data-scroll data-scroll-section data-scroll-speed="0.1" className={"w-full h-auto bg-neutral-50"}>
                    <Skills />
                    <div className=' max-w-[600px] bg-black p-4 rounded-lg  md:hidden'>
                        <p className="text-left  text-neutral-200 text-xl">
                            I'm a passionate software Engineer skilled in <ImponentText
                                words={"Java, JavaScript, TypeScript,"} /> ans <ImponentText words={"Node.js"} />. I specialize in
                            full-stack development, working with frameworks like <ImponentText
                                words={"React.js, Next.js, Express, Tailwind CSS, SASS, "} />, ans <ImponentText
                                words={"Framer Motion"} /> .
                            My experience includes working with <ImponentText
                                words={"AWS, Google Cloud, Firebase, BullMQ,"} />and <ImponentText words={"MongoDB"} />.
                            My experience spans across <ImponentText
                                words={"AWS, Google Cloud, Firebase, BullMQ,"} /> ans <ImponentText words={"MongoDB"} />.
                        </p>
                    </div>
                    <div className='max-w-[600px] bg-neutral-300 mt-2 p-4 rounded-lg md:hidden'>
                        <p className="text-left  text-neutral-800 text-xl">
                            I've created impactful projects, including <ImponentText words={"my-own-facebook"} /> and
                            an <ImponentText words={"animated 3D portfolio"} />, showcasing both technical expertise and
                            creativity. With over <ImponentText words={"900+ problems solved on LeetCode"} />, I continually
                            enhance my problem-solving abilities and stay eager to take on new challenges.
                        </p>
                    </div>
                </div>
                <footer>
                    <div className={`flex items-center justify-center h-[35rem] md:h-[200px] w-full bg-neutral-50`}>
                        <FloatingDock
                            pathName={"about"}
                            isDark={false}
                        />
                    </div>
                </footer>
            </div>
        </main>
    );
}
