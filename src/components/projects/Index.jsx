"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    Star,
    Github,
    Check,
    List,
    PanelsTopLeft,
    CheckCheck,
    DraftingCompass,
    SquareArrowOutUpRight,
} from "lucide-react";
import { Timeline } from "@/components/ui/timeline";

export function ProjectsList() {
    const router = useRouter();

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
                            <Star color="blue" /> {text}
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
                            <Check color="#73EC8B" />{" "}
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
                                        icon: <Github />,
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
                                        icon: <Github />,
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
                            <div
                                key={index}
                                className="w-auto h-auto rounded-lg group relative overflow-hidden"
                            >
                                <Image
                                    src={items.src}
                                    alt={items.alt}
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                />
                                <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-transparent transition-all border border-transparent duration-300 group-hover:bg-transparent/60 group-hover:border-gray-600 z-10 cursor-pointer" />
                                <div className="absolute bottom-3 right-5 z-20 translate-y-10 transition-transform duration-300 group-hover:translate-y-0 flex gap-2">
                                    <p className="font-roboto font-bold">{items.name}</p>
                                    {items.links.map((link, idx) => (
                                        <Link
                                            href={link.href}
                                            key={idx}
                                            target="_blank"
                                            className="transition-colors duration-250 text-gray-200 hover:text-blue-500"
                                        >
                                            {link.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
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
                            icon: List,
                        },
                        {
                            text: "Create meny of projects using React, Node.js, Express and MongoDB.",
                            icon: PanelsTopLeft,
                        },
                        {
                            text: "Complete 900+ problems solved in leetcode.",
                            icon: CheckCheck,
                        },
                        {
                            text: "Explore tools like Git, GitHub, aws, firebase, vercel, googleapis, google cloud, etc.",
                            icon: DraftingCompass,
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
                                alt: "hero-sections",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/bapparaj",
                                        icon: <Github />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/codeking.png",
                                alt: "codeking",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/music.io",
                                        icon: <Github />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/portfolio.png",
                                alt: "portfolio",
                                links: [
                                    {
                                        href: "https://bapparaj.tech/",
                                        icon: <SquareArrowOutUpRight />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/quze-app1.png",
                                alt: "quze app",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/quiz-app",
                                        icon: <Github />,
                                    },
                                    {
                                        href: "https://quiz-app-amber-chi.vercel.app/",
                                        icon: <SquareArrowOutUpRight />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/product1.png",
                                alt: "product ",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/product",
                                        icon: <Github />,
                                    },
                                    {
                                        href: "https://product-topaz-alpha.vercel.app/",
                                        icon: <SquareArrowOutUpRight />,
                                    },
                                ],
                            },
                            {
                                src: "/projects/component-lab.png",
                                alt: "component lab",
                                links: [
                                    {
                                        href: "https://github.com/Bapparajsk/component-lab",
                                        icon: <Github />,
                                    },
                                ],
                            },
                        ].map((items, index) => (
                            <div
                                key={index}
                                className="w-auto h-auto rounded-lg group relative overflow-hidden"
                            >
                                <Image
                                    src={items.src}
                                    alt={items.alt}
                                    width={500}
                                    height={500}
                                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                                />
                                <div className="absolute top-0 left-0 w-full h-full rounded-lg group-hover:bg-transparent/50 z-10 cursor-pointer" />
                                <div className="absolute bottom-3 right-5 z-20 translate-y-10 transition-transform duration-300 group-hover:translate-y-0 flex gap-2">
                                    <p className="font-roboto font-bold">{items.name}</p>
                                    {items.links.map((link, idx) => (
                                        <Link
                                            href={link.href}
                                            key={idx}
                                            target="_blank"
                                            className="transition-colors duration-250 text-gray-200 hover:text-blue-500"
                                        >
                                            {link.icon}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="w-full h-full bg-gray-800 rounded-md">
                            {[
                                {
                                    title: "code-king-server",
                                    description:
                                        "This is a server for code-king. Technology used: Node.js, Express, MongoDB, JWT, etc.",
                                    link: "https://github.com/Bapparajsk/code-king-server/",
                                },
                                {
                                    title: "my-own-facebook-server",
                                    description:
                                        "This project is a server implementation for a social media platform similar to Facebook. The server is built using TypeScript and includes various functionalities required to manage user accounts, posts, interactions, and more.",
                                    link: "https://github.com/Bapparajsk/my-own-facebook-server",
                                },
                                {
                                    title: "component-lab-server",
                                    description:
                                        "A server for component lab. Technology used: Node.js, Express, MongoDB, Typescript, JWT, BullMq, redis, etc.",
                                    link: "https://github.com/Bapparajsk/component-lab-server",
                                },
                                
                            ].map((item, idx) => (
                                <div key={idx} className="p-4 border-b border-gray-700 ">
                                    <div className="w-full flex items-center justify-between font-roboto ">
                                        <h2 className="text-md font-normal text-xl text-blue-500">
                                            {item.title}
                                        </h2>
                                        <Link href={item.link} target={"_blank"}> 
                                            <Github size={20} color="#ffffff80"/>
                                        </Link>
                                    </div>
                                    <p className="text-neutral-500 text-sm font-ubuntu">
                                        {item.description.length > 50
                                            ? item.description.slice(0, 50) + "..."
                                            : item.description}
                                    </p>
                                </div>
                            ))}
                            <div >
                                <Link href="https://github.com/Bapparajsk?tab=repositories" target={"_blank"} className="w-full flex gap-1 items-center justify-center py-2 transition-colors duration-500 hover:text-blue-600">
                                    <Github /> View all projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Changelog",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Deployed 5 new components on Aceternity today
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Card grid component
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Startup template Aceternity
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Random file upload lol
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Himesh Reshammiya Music CD
                        </div>
                        <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Salman Bhai Fan Club registrations open
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Image
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/pro/bento-grids.png"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
                        <Image
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                        />
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
