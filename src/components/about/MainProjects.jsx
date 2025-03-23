"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { Image } from "@/lib/next";
import { Card, CardBody } from "@/lib/nextui";
import { AnimatePresence, MotionDiv } from "@/lib/motion";
import { aboutData } from "./data";

gsap.registerPlugin(ScrollTrigger);

const directions = ["top", "right", "bottom", "left"];
const motionVariants = {
    initial: { x: 0 },
    exit: { x: 0, y: 0 },
    top: { y: 20 },
    bottom: { y: -20 },
    left: { x: 20 },
    right: { x: -20 }
};

export default function MainProjects() {
    return (
        <>
            <div
                data-scroll
                data-scroll-section
                data-scroll-speed=".2"
                className="w-full h-auto hidden md:block"
            >
                {aboutData.map((data, idx) => (
                    <ProjectCard key={idx} {...data} idx={idx + 1} />
                ))}
            </div>
            <div className="w-full h-auto md:hidden px-3 flex flex-col gap-5">
                {aboutData.map((data, idx) => (
                    <ProjectCardMobile key={idx} {...data} idx={idx + 1} />
                ))}
            </div>
        </>
    );
}

const ProjectCardMobile = ({ title, description, theme_image, image, idx }) => {
    return (
        <Card>
            <div className="w-full h-auto px-5 py-3 font-Josefin text-start">
                <strong className="text-2xl font-bold">{title}</strong>
            </div>
            <CardBody>
            <div className={`relative w-full md:w-[65%] md:h-full`}>
                        <Image
                            className="absolute top-0 left-0 object-cover opacity-10 w-full h-full"
                            src={theme_image || "/themes-image/haunted-horror.webp"}
                            width={1000}
                            height={1000}
                            alt="background-theme-image"
                        />
                        <div className="w-full h-full flex  px-5 font-ubuntu text-lg tracking-wide text-center flex-col ">
                            <div className="w-full h-auto px-5 py-3 font-Josefin text-start hidden md:block">
                                <strong className="text-2xl font-bold">{title}</strong>
                            </div>
                            <div className="w-full h-full flex items-center px-5 py-3 text-sm md:text-medium">
                                {description()}
                            </div>
                        </div>
                    </div>
            </CardBody>
        </Card>
    );
}

const ProjectCard = ({ title, description, theme_image, image, idx }) => {
    const cardRef = useRef(null);
    const ImageRef = useRef(null);
    const [direction, setDirection] = useState("left");

    useEffect(() => {
        const card = cardRef.current;
        const scale = 0.55 + idx * 0.05;
        gsap.to(card, {
            scrollTrigger: {
                trigger: card,
                start: `top ${idx * 4}%`,
                end: `top ${idx * 7}%`,
                scrub: 0.5,
            },
            scale,
            y: -100,
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    const handleMouseEnter = (event) => {
        if (!ImageRef.current) return;

        const direction = getDirection(event, ImageRef.current);
        const dir = direction <= 3 ? directions[direction] : "left";
        
        setDirection(dir);
    };

    const getDirection = (ev, obj) => {
        const { width: w, height: h, left, top } = obj.getBoundingClientRect();
        const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
        const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return d;
    };

    return (
        <Card
            ref={cardRef}
            style={{ top: `${idx * 6}vh` }}
            className={`flex-row max-w-7xl mx-auto mb-5 sticky z-50 bg-white text-black`}

        >
            <CardBody>
                <div
                    className={`flex h-full w-full transition-all duration-300 ease-in-out`}
                    style={{ flexDirection: idx % 2 === 0 ? "row-reverse" : "row" }}
                >
                    <div className="w-full h-auto px-5 py-3 font-Josefin text-start md:hidden">
                        <strong className="text-2xl font-bold">{title}</strong>
                    </div>
                    <MotionDiv
                        onMouseEnter={handleMouseEnter}
                        ref={ImageRef}
                        className={"md:h-96 w-60 h-60 md:w-96 bg-transparent rounded-lg overflow-hidden group/card relative"}
                    >
                        <AnimatePresence mode="wait">
                            <MotionDiv
                                className="relative h-full w-full"
                                initial="initial"
                                whileHover={direction}
                                exit="exit"
                            >
                                <MotionDiv className="group-hover/card:block hidden absolute inset-0 w-full h-full bg-black/40 z-10 transition duration-500" />
                                <MotionDiv
                                    variants={motionVariants}
                                    className="h-full w-full relative bg-black"
                                    transition={{ duration: 0.2, ease: "easeOut", }}
                                >
                                    <Image
                                        alt="image"
                                        className={"h-full w-full object-cover scale-[1.15]"}
                                        width="1000"
                                        height="1000"
                                        src={image || "/themes-image/haunted-horror.webp"}
                                    />
                                </MotionDiv>
                            </MotionDiv>
                        </AnimatePresence>
                    </MotionDiv>
                    <div className={`relative w-full md:w-[65%] md:h-full`}>
                        <Image
                            className="absolute top-0 left-0 object-cover opacity-10 w-full h-full rounded-md"
                            src={theme_image || "/themes-image/haunted-horror.webp"}
                            width={1000}
                            height={1000}
                            alt="background-theme-image"
                        />
                        <div className="w-full h-full flex  px-5 font-ubuntu text-lg tracking-wide text-center flex-col ">
                            <div className="w-full h-auto px-5 py-3 font-Josefin text-start hidden md:block">
                                <strong className="text-2xl font-bold">{title}</strong>
                            </div>
                            <div className="w-full h-full flex items-center px-5 py-3 text-sm md:text-medium">
                                {description()}
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

