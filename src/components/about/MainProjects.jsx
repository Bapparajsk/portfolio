"use client";

import { useRef, useState } from "react";
import {
    motion,
    useScroll,
    useMotionValueEvent,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import AboutMeCard from "./AboutMeCard";
import Projects from "./ProjectsCard";
import ToolsTechnologies from "./ToolsTechnologiesCard";
import GitHubLanguages from "./GitHubLanguagesCard";

const offset = ["start 90%", "start 0%"];
const springVal = { stiffness: 120, damping: 20 };
const transVal = [[0, 1], ["0%", "100%"]];

export default function MainProjects() {
    const refs = {
        about: useRef(null),
        projects: useRef(null),
        tools: useRef(null),
        github: useRef(null),
    };

    const scrolls = {
        about: useScroll({ target: refs.about, offset }),
        projects: useScroll({ target: refs.projects, offset }),
        tools: useScroll({ target: refs.tools, offset }),
        github: useScroll({ target: refs.github, offset }),
    };

    const scrollProgress = {
        about: useTransform(
            useSpring(useTransform(scrolls.about.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        projects: useTransform(
            useSpring(useTransform(scrolls.projects.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        tools: useTransform(
            useSpring(useTransform(scrolls.tools.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
        github: useTransform(
            useSpring(useTransform(scrolls.github.scrollYProgress, ...transVal), springVal),
            (v) => `${v.toFixed(0)}%`
        ),
    };

    const [activeSection, setActiveSection] = useState(null);

    useMotionValueEvent(scrolls.about.scrollYProgress, "change", (latest) => {
        if (latest > 0.1 && latest < 1) setActiveSection("about");
    });
    useMotionValueEvent(scrolls.projects.scrollYProgress, "change", (latest) => {
        if (latest > 0.1 && latest < 1) setActiveSection("projects");
    });
    useMotionValueEvent(scrolls.tools.scrollYProgress, "change", (latest) => {
        if (latest > 0.1 && latest < 1) setActiveSection("tools");
    });
    useMotionValueEvent(scrolls.github.scrollYProgress, "change", (latest) => {
        if (latest > 0.1) setActiveSection("github");
    });

    const sectionMap = {
        about: "About Me",
        projects: "Top Projects",
        tools: "Tools & Technologies",
        github: "GitHub Status",
    };

    return (
        <div className="w-full h-auto relative">
            {/* Floating Title */}
            <div className="fixed top-14 left-5 w-fit pt-10 z-50">
                <div className="flex-col gap-4 hidden lg:flex">
                    <AnimatePresence mode="wait">
                        {activeSection && (
                            <MotionTitle
                                key={activeSection}
                                title={sectionMap[activeSection]}
                                progress={scrollProgress[activeSection]}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Sections */}
            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section
                    ref={refs.about}
                    className="relative w-full min-h-screen text-white flex items-center justify-center px-4 py-24 bg-[#010409]"
                >
                    <AboutMeCard />
                </section>
            </div>

            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section
                    ref={refs.projects}
                    className="top-0 w-full min-h-screen h-fit bg-[#010409] text-white px-6 py-10 flex items-center justify-center"
                >
                    <Projects />
                </section>
            </div>

            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section
                    ref={refs.tools}
                    className="top-0 w-full min-h-screen py-24 px-6 bg-[#010409] text-white"
                >
                    <ToolsTechnologies />
                </section>
            </div>

            <div className="lg:sticky top-0 border-t border-[#5BC3DE]">
                <section
                    ref={refs.github}
                    className="top-0 w-full h-full min-h-screen bg-[#010409] text-white flex items-center justify-center py-10 px-6"
                >
                    <GitHubLanguages />
                </section>
            </div>
        </div>
    );
}

const MotionTitle = ({ title, progress }) => (
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
                style={{ width: progress }}
            />
        </div>
    </motion.div>
);
