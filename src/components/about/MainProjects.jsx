"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring, useTransform, AnimatePresence } from "framer-motion"
import AboutMeCard from "./AboutMeCard";
import Projects from "./ProjectsCard";
import ToolsTechnologies from "./ToolsTechnologiesCard";
import GitHubLanguages from "./GitHubLanguagesCard";
import Aurora from "../ui/Aurora";

const offset = ["start 90%", "start 0%"];
const springVal = { stiffness: 120, damping: 20 };
const transVal = [[0, 1], ["0%", "100%"]];

export default function MainProjects() {

    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const toolsRef = useRef(null);
    const githubRef = useRef(null);

    const [showTitle, setShowTitle] = useState({
        about: false,
        projects: false,
        tools: false,
        github: false
    });

    const aboutScroll = useScroll({ target: aboutRef, offset });
    const projectsScroll = useScroll({ target: projectsRef, offset });
    const toolsScroll = useScroll({ target: toolsRef, offset });
    const githubScroll = useScroll({ target: githubRef, offset });

    const changeProgress = (key, progress) => {
        let isShow = progress > 0.1 && progress < 1;
        if (key === "github") {
            isShow = progress > 0.1;
        }
        setShowTitle(prev => ({
            ...prev,
            [key]: isShow
        }));
    }

    useMotionValueEvent(aboutScroll.scrollYProgress, "change", (latest) => changeProgress("about", latest));
    useMotionValueEvent(projectsScroll.scrollYProgress, "change", (latest) => changeProgress("projects", latest));
    useMotionValueEvent(toolsScroll.scrollYProgress, "change", (latest) => changeProgress("tools", latest));
    useMotionValueEvent(githubScroll.scrollYProgress, "change", (latest) => changeProgress("github", latest));

    const progress = {
        about: useTransform(
            useSpring(useTransform(aboutScroll.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        projects: useTransform(
            useSpring(useTransform(projectsScroll.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        tools: useTransform(
            useSpring(useTransform(toolsScroll.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        github: useTransform(
            useSpring(useTransform(githubScroll.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
    };

    return (
        <div className="w-full h-auto relative">
            <div className="fixed top-14 left-5 w-fit pt-10 z-50">
                <div className="flex-col gap-4 hidden lg:flex">
                    <AnimatePresence mode="wait">
                        {
                            showTitle.about ? <MotionTitle title="About Me" progress={progress.about} /> :
                                showTitle.projects ? <MotionTitle title="Top Projects" progress={progress.projects} /> :
                                    showTitle.tools ? <MotionTitle title="Tools & Technologies" progress={progress.tools} /> :
                                        showTitle.github ? <MotionTitle title="GitHub Status" progress={progress.github} /> :
                                            null
                        }
                    </AnimatePresence>
                </div>
            </div>

            <div className="lg:sticky top-0 border-t border-[#5BC3DE]" >
                <section ref={aboutRef} className="relative w-full min-h-screen text-white flex items-center justify-center px-4 py-24 bg-[#010409]">
                    <AboutMeCard />
                </section>
            </div>
            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section ref={projectsRef} className="top-0 w-full min-h-screen h-fit bg-[#010409] text-white px-6 py-10 flex items-center justify-center">
                    <Projects />
                </section>
            </div>
            <div className="lg:sticky top-0 border-t border-[#5BC3DE]" >
                <section ref={toolsRef} className="top-0 w-full min-h-screen py-24 px-6 bg-[#010409] text-white ">
                    <ToolsTechnologies />
                </section>
            </div>
            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section ref={githubRef} className="top-0 w-full h-full min-h-screen bg-[#010409] text-white flex items-center justify-center py-10 px-6 ">
                    <GitHubLanguages />
                </section>
            </div>
        </div>
    );
}

const MotionTitle = ({ title, progress }) => {
    return (
        <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 relative"
        >
            <div className="w-fit text-2xl font-semibold capitalize">
                {title}
                <motion.div
                    className="absolute bottom-0 left-0 w-0 h-1 bg-[#64D4EE] rounded-full"
                    style={{
                        width: progress
                    }}
                />
            </div>
        </motion.div>
    )
}