import { Link, Image } from "@/lib/next"
import { getIcon } from "@/assets/icons";
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
                            className="text-neutral-200 font-semibold text-md mb-6 flex gap-2"
                        >
                            {getIcon({name: "star", className: "!text-blue-500"})} {text}
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
                            {getIcon({name: "checks", className: "!text-[#73EC8B]"})}{" "}
                            <p className="text-neutral-200 font-semibold text-md mb-4">
                                {text}
                            </p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            {
                                src: "/projects/solar-system.png",
                                alt: "solar system project",
                                name: "Soler system",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/bapparaj",
                                        icon: getIcon({name: "github"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/music.png",
                                alt: "music.io for music any time",
                                name: "Music.io",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/music.io",
                                        icon: getIcon({name: "github"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/leetcode.png",
                                alt: "leetcode profile",
                                name: "Leetcode",
                                links: [
                                    {
                                        href: "https://leetcode.com/u/Bapparajsk/",
                                        icon: (
                                            <Image src="/svg/leetcode.svg" alt="leetcode icon image" width={20} height={20} />
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
                            icon: "list",
                        },
                        {
                            text: "Create meny of projects using React, Node.js, Express and MongoDB.",
                            icon: "projectList",
                        },
                        {
                            text: "Complete 900+ problems solved in leetcode.",
                            icon: "circleCheck",
                        },
                        {
                            text: "Explore tools like Git, GitHub, aws, firebase, vercel, googleapis, google cloud, etc.",
                            icon: "geometry",
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="flex gap-x-1">
                            {getIcon({name: item.icon})}{" "}
                            <strong className="text-neutral-200 mb-4">
                                {item.text}
                            </strong>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {[
                            {
                                src: "/projects/newapp.png",
                                alt: "new app project",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/bapparaj",
                                        icon: getIcon({name: "github"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/codeking.png",
                                alt: "codeking project for coding",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/music.io",
                                        icon: getIcon({name: "github"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/portfolio.png",
                                alt: "portfolio project",
                                links: [
                                    {
                                        href: "https://bapparaj.tech/",
                                        icon: getIcon({name: "share"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/quze-app1.png",
                                alt: "quze app project for quiz",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/quiz-app",
                                        icon: getIcon({name: "github"}),
                                    },
                                    {
                                        href: "https://quiz-app-amber-chi.vercel.app/",
                                        icon: getIcon({name: "share"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/product1.png",
                                alt: "product project",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/product",
                                        icon: getIcon({name: "github"}),
                                    },
                                    {
                                        href: "https://product-topaz-alpha.vercel.app/",
                                        icon: getIcon({name: "share"}),
                                    },
                                ],
                            },
                            {
                                src: "/projects/component-lab.png",
                                alt: "component lab project for component design",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/component-lab",
                                        icon: getIcon({name: "github"}),
                                    },
                                ],
                            },
                        ].map((items, index) => (
                            <Card key={index} {...items} />
                        ))}
                        <div className="w-full h-full rounded-md">
                            <Link
                                href="https://github.com/Bapparajsk?tab=repositories"
                                target={"_blank"}
                            >
                                <InteractiveHoverButton text={"View all projects"} className={"w-full items-center justify-center"}/>
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
                                {getIcon({name: "pencilCheck"})} <strong>{text}</strong>
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
