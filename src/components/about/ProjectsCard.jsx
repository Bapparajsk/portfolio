'use client';

import { motion } from 'framer-motion';
import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "@heroui/tooltip";
import { Button } from '@heroui/button';
import { getIcon } from '@/assets/icons';
import { Skeleton } from '@heroui/skeleton';

const staticData =
    [
        {
            "name": "portfolio",
            "description": "Explore a dynamic portfolio website built with Next.js, Three.js, and Tailwind CSS. This responsive web application showcases innovative design and interactive elements, offering a seamless user experience across devices",
            "url": "https://github.com/Bapparajsk/portfolio",
            "languages": [
                "JavaScript",
                "CSS"
            ],
            "topics": [
                "framer-motion",
                "nextjs",
                "threejs"
            ]
        },
        {
            "name": "codeking",
            "description": "CodeKing is a comprehensive repository that houses a collection of coding solutions, algorithms, and data structures implemented in various programming languages. Whether you're a beginner looking to understand fundamental concepts or an experienced developer seeking optimized solutions, CodeKing offers a diverse range of resources to enhance your ",
            "url": "https://github.com/Bapparajsk/codeking",
            "languages": [
                "JavaScript",
                "CSS"
            ],
            "topics": [
                "nextjs"
            ]
        },
        {
            "name": "my-own-facebook-server",
            "description": "This project is a server implementation for a social media platform similar to Facebook. The server is built using TypeScript and includes various functionalities required to manage user accounts, posts, interactions, and more.",
            "url": "https://github.com/Bapparajsk/my-own-facebook-server",
            "languages": [
                "TypeScript",
                "HTML",
                "JavaScript"
            ],
            "topics": [
                "server"
            ]
        },
        {
            "name": "my-own-facebook",
            "description": "The \"my-own-facebook\" repository is a personal project aimed at creating a custom social media platform inspired by Facebook. This project focuses on implementing core features of a social networking platform while allowing for customization and extension according to individual preferences.",
            "url": "https://github.com/Bapparajsk/my-own-facebook",
            "languages": [
                "TypeScript",
                "CSS",
                "JavaScript"
            ],
            "topics": [
                "nextjs",
                "nextjsui",
                "social-media",
                "typescript"
            ]
        },
        {
            "name": "component-lab",
            "description": "A starter template for building fast, scalable, and maintainable web applications with Next.js. This project includes a set of pre-configured features, including theme management, responsive design, and reusable components.",
            "url": "https://github.com/Bapparajsk/component-lab",
            "languages": [
                "TypeScript",
                "CSS",
                "JavaScript"
            ],
            "topics": [
                "animation-effects",
                "nextjs-typescript",
                "ui-components"
            ]
        },
    ];


export default function TopProjects() {

    const { data, isPending, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: async () => {
            const res = await fetch("/api/github/pinnedrepos");
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await res.json();
            return data;
        },
        gcTime: 1000 * 60 * 60 * 24, // 1 day
        refetchOnWindowFocus: false,
    })

    return (

        <div className="max-w-7xl w-full space-y-10">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-center"
            >
                🚀 Top Projects
            </motion.h2>
            {isError && (
                <div className="text-red-500 text-center w-full h-full flex items-center justify-center">
                    <p>Failed to load projects. Please try again later.</p>
                </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {isPending && Array.from({length: 4}).map((_, len) => (
                    <SkeletonCard key={len} />
                ))}
                {data && data.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * index }}
                        className="bg-[#151B23] border border-[#173043] rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                    >
                        <div className="flex items-center gap-3 mb-3 text-xl font-semibold">
                            <span >{project.name}</span>

                            <Tooltip content="View on GitHub" color='foreground'>
                                <Button
                                    as={"a"}
                                    href={project.url}
                                    target="_blank"
                                    variant='faded'
                                    size='sm'
                                    color='primary'
                                    isIconOnly={true}
                                >
                                    {getIcon({
                                        name: "github",
                                        className: "text-gray-400 size-5"
                                    })}
                                </Button>
                            </Tooltip>
                        </div>
                        <p className="text-gray-400 mb-4 text-sm">{project.description.length > 200 ? project.description.substring(0, 200) + "..." : project.description}</p>
                        <div className='flex flex-col gap-2'>
                            <div className="flex flex-wrap gap-2 items-center">
                                {project.languages.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                <div className='w-[2px] h-5 rounded-lg bg-pink-500' />
                                {project.topics.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs border border-gray-700 text-gray-300 px-2 py-1 rounded-full shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    );
}

function SkeletonCard() {
    return (
        <div className='bg-[#151B23] border border-[#173043] rounded-2xl flex flex-col items-start justify-center p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300'>
            <div className='flex gap-2 mb-2'>
                <Skeleton className={"w-32 h-8 rounded-md"} />
                <Skeleton className={"w-8 h-8 rounded-md"} />
            </div>
            <div className='w-full flex flex-col gap-2 mt-4'>
                <Skeleton className={"w-full h-4 rounded-md"} />
                <Skeleton className={"w-full h-4 rounded-md"} />
                <Skeleton className={"w-full h-4 rounded-md"} />
            </div>
            <div className='w-full flex gap-2 mt-4'>
                <Skeleton className={"w-20 h-6 rounded-md"} />
                <Skeleton className={"w-20 h-6 rounded-md"} />
                <Skeleton className={"w-20 h-6 rounded-md"} />
                <Skeleton className={"w-20 h-6 rounded-md"} />
            </div>
        </div>
    )
}