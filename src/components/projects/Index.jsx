import Image from "next/image";
import Link from "next/link";
import {
    IconCarambola,
    IconBrandGithub,
    IconChecks,
    IconList,
    IconBrowserPlus,
    IconCircleCheck,
    IconGeometry,
    IconTableShare,
    IconPencilCheck,
} from "@tabler/icons-react";
import { Timeline } from "@/components/ui/timeline";
import Card from "./Card";
import InteractiveHoverButton from "../ui/interactive-hover-button";

export function ProjectsList() {
    const data = [
        {
            title: "Early 2022",
            content: (
                <div>
                    {[
                        "Started my coding journey with Java.",
                        "Learned about data structures and algorithms.",
                        "Solved problems on LeetCode.",
                        "Participated in online coding contests.",
                    ].map((text, index) => (
                        <p
                            key={index}
                            className="text-neutral-200 text-md font-normal mb-6 flex gap-2"
                        >
                            <IconCarambola color="blue" /> {text}
                        </p>
                    ))}
                </div>
            ),
        },
        {
            title: "Early 2023",
            content: (
                <div>
                    {[
                        "Started learning web development, in HTML CSS and JavaScript.",
                        "I create websites and web applications using HTML, CSS, and JavaScript.",
                        "I solved 800+ problems on LeetCode and participated in online coding.",
                    ].map((text, idx) => (
                        <div key={idx} className="flex gap-1">
                            <IconChecks color="#73EC8B" />{" "}
                            <p className="text-neutral-200 text-md font-normal mb-4">
                                {" "}
                                {text}{" "}
                            </p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            {
                                src: "/projects/solar-system.png",
                                alt: "hero-sections",
                                name: "Soler system",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/bapparaj",
                                        icon: <IconBrandGithub />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/music.png",
                                alt: "music.io",
                                name: "Music.io",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/music.io",
                                        icon: <IconBrandGithub />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/leetcode.png",
                                alt: "leecode",
                                name: "Leetcode",
                                links: [
                                    {
                                        href: "https://leetcode.com/u/Bapparajsk/",
                                        icon: (
                                            <Image src="/svg/leetcode.svg" width={20} height={20} />
                                        ),
                                    },
                                ],
                            },
                        ].map((items, index) => (
                            <Card key={index} {...items} />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Early 2024",
            content: (
                <div>
                    {[
                        {
                            text: "Learning React, Node.js, Node.js Express framework and Database in MongoDB.",
                            icon: IconList,
                        },
                        {
                            text: "Create meny of projects using React, Node.js, Express and MongoDB.",
                            icon: IconBrowserPlus,
                        },
                        {
                            text: "Complete 900+ problems solved in leetcode.",
                            icon: IconCircleCheck,
                        },
                        {
                            text: "Explore tools like Git, GitHub, aws, firebase, vercel, googleapis, google cloud, etc.",
                            icon: IconGeometry,
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-x-1">
                            <item.icon />{" "}
                            <p className="text-neutral-200 text-md font-normal mb-4">
                                {" "}
                                {item.text}{" "}
                            </p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            {
                                src: "/projects/newapp.png",
                                alt: "new App",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/bapparaj",
                                        icon: <IconBrandGithub />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/codeking.png",
                                alt: "codeking",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/music.io",
                                        icon: <IconBrandGithub />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/portfolio.png",
                                alt: "portfolio",
                                links: [
                                    {
                                        href: "https://bapparaj.tech/",
                                        icon: <IconTableShare />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/quze-app1.png",
                                alt: "quze app",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/quiz-app",
                                        icon: <IconBrandGithub />,
                                    },
                                    {
                                        href: "https://quiz-app-amber-chi.vercel.app/",
                                        icon: <IconTableShare />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/product1.png",
                                alt: "product ",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/product",
                                        icon: <IconBrandGithub />,
                                    },
                                    {
                                        href: "https://product-topaz-alpha.vercel.app/",
                                        icon: <IconTableShare />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/component-lab.png",
                                alt: "component lab",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/component-lab",
                                        icon: <IconBrandGithub />,
                                    },
                                ],
                            },
                        ].map((items, index) => (
                            <Card key={index} {...items} />
                        ))}
                        <div className="w-full h-fullrounded-md">
                            <Link
                                href="https://github.com/Bapparajsk?tab=repositories"
                                target={"_blank"}
                            >
                                <InteractiveHoverButton text={"View all projects"} className={"w-full items-center justify-center"}/>
                                {/* <IconBrandGithub />  */}
                            </Link>
                            
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <div className="mb-8 font-roboto">
                        {[
                            "Updated portfolio website.",
                            "Created a new Quiz app using Next.js, Node.js, TypeScript, and Tailwind CSS.",
                            "Built a product named Component Lab.",
                            "Set up a new server for Component Lab with Node.js, TypeScript, Express, MongoDB, and Redis for caching.",
                            "Updated all repositories on GitHub.",
                        ].map((text, idx) => (
                            <div key={idx} className="flex gap-2 items-start text-neutral-300 text-xl mb-3">
                                <IconPencilCheck /> <p>{text}</p>
                            </div>
                        ))}

                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
