'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import MagneticContainer from '../ui/MagneticButton';

const techDetails = [
    {
        title: 'Languages',
        color: 'text-red-400',
        items: [
            { name: 'JavaScript', icon: "javaScript" },
            { name: 'TypeScript', icon: "typeScript" },
            { name: 'Java', icon: "java" },
            { name: 'GraphQL', icon: "graphql" },
        ],
    },
    {
        title: 'Frameworks',
        color: 'text-purple-400',
        items: [
            { name: 'Next.js', icon: "nextJs" },
            { name: 'React', icon: "react" },
            { name: 'Express', icon: "express" },
            { name: 'Apollo', icon: "apollo" },
            { name: 'Prisma', icon: "prisma" },
        ],
    },
    {
        title: 'Databases',
        color: 'text-pink-400',
        items: [
            { name: 'MongoDB', icon: "mongoDB" },
            { name: 'MySQL', icon: "sql" },
            { name: 'Redis', icon: "redis" },
        ],
    },
    {
        title: 'Cloud Platforms',
        color: 'text-yellow-300',
        items: [
            { name: 'AWS', icon: "aws" },
            { name: 'Google Cloud', icon: "googleCloud" },
            { name: 'Firebase', icon: "fireBase" },
        ],
    },
    {
        title: 'Others',
        color: 'text-cyan-400',
        items: [
            { name: 'Tailwind CSS', icon: "tailwind" },
            { name: 'SASS', icon: "sass" },
            { name: 'BullMQ', icon: "queue" },
            { name: 'Node.js Cluster', icon: "nodeJs" },
        ],
    },
];

export default function ToolsTechnologies() {
    return (

        <div className="max-w-7xl mx-auto z-10 relative">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-extrabold text-center mb-16 flex justify-center items-center gap-4 text-heading-1"
            >
                <img src={`/svg/tools.svg`} className={"size-20"} />
                Tools & Technologies
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {techDetails.map(({ title, items, color }) => (
                    <motion.div
                        key={title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-[#151B23] p-6 rounded-2xl backdrop-blur-md shadow-lg"
                    >
                        <h3 className={`text-2xl font-semibold mb-4 text-heading-3 ${color}`}>{title}</h3>
                        <div className="space-y-2">
                            {items.map((i, idx) => (
                                <MagneticContainer sensitivity={15} key={idx}>
                                    <motion.div
                                        className="flex items-center gap-2 text-white/90 py-1.5 px-2 rounded-lg cursor-pointer 
                                        border border-gray-600 
                                        transition-transform duration-300 bg-white/5 hover:bg-white/10 button"
                                    >
                                        <motion.div
                                            className="shrink-0"
                                        >
                                            <Image
                                                src={`/svg/${i.icon.toLowerCase()}.svg`}
                                                width={500}
                                                height={500}
                                                className="size-5"
                                                alt={i.name}
                                            />
                                        </motion.div>
                                        <span className="ml-1">{i.name}</span>
                                    </motion.div>
                                </MagneticContainer>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
