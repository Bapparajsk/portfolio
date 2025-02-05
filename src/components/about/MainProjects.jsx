"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import * as NextUi from "@nextui-org/image";

gsap.registerPlugin(ScrollTrigger);

export default function MainProjects() {
    useEffect(() => {
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className="w-full h-auto">
            {[...Array(5)].map((_, i) => (
                <ProjectCard idx={i + 1} />
            ))}
        </div>
    );
}

const ProjectCard = ({ title, description, image, link, idx }) => {
    const cardRef = useRef(null);
    useEffect(() => {
        const card = cardRef.current;
        const scale =
            idx === 1
                ? 0.65
                : idx === 2
                    ? 0.7
                    : idx === 3
                        ? 0.75
                        : idx === 4
                            ? 0.8
                            : 0.85;
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: `top ${idx * 3}%`,
                end: `top ${idx * 3}%`,
                scrub: 0.2,
                onEnter: () => gsap.to(card, { scale, y: -100 }),
                onLeaveBack: () => gsap.to(card, { scale: 1, y: 0 }),
            },
        });
    }, []);

    return (
        <Card
            ref={cardRef}
            style={{
                top: `${idx * 6}vh`,
            }}
            className={`flex-row max-w-7xl mx-auto mb-5 sticky z-50 "}`}
        >
            <CardBody>
                <div
                    className={`flex h-full flex-row ${idx % 2 === 0 ? "flex-row-reverse" : "flex-row"
                        } `}
                >
                    <div className="relative w-[35%] h-96 overflow-hidden group rounded-2xl shadow-lg">
                        <NextUi.Image
                            width={2000}
                            height={2000}
                            src={`/images/about-card-1.png`}
                            alt="image"
                            className="group-hover:scale-125  transform transition-transform duration-500"
                        />
                        <div className="absolute z-20 left-0 top-0 bg-transparent group-hover:bg-gradient-to-b from-slate-900 to-slate-950 w-full h-full opacity-50" />
                    </div>
                    <div className={`relative w-[65%] h-full`}>
                        <Image
                            className="absolute top-0 left-0 object-cover opacity-5 w-full h-full"
                            src={"/themes-image/haunted-horror.webp"}
                            width={1000}
                            height={1000}
                            alt="image"
                        />
                        <div className="w-full h-full flex  px-5 font-ubuntu text-lg tracking-wide text-center flex-col ">
                            <div className="w-full h-auto px-5 py-3 font-Josefin text-start">
                                <strong className="text-2xl font-bold">
                                    🚀 About Me
                                </strong>
                            </div>
                            <div className="w-full h-full flex items-center px-5 py-3">
                                <p>
                                    I’m a Passionate Full-Stack Developer with strong Problem-Solving Skills, proven by solving 900+ LeetCode Problems. I specialize in JavaScript, TypeScript, and Java, crafting dynamic web apps using Next.js, React, and Express. My focus is on building Scalable, User-Friendly Applications while continuously improving my expertise in Cloud Technologies like AWS and Google Cloud.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
