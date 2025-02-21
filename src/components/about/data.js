import { useRef } from "react";
import { ImpotentText } from "@/components/ui/impotent-text";
import { MotionDiv, useInView } from "@/lib/motion";
import { Link } from "@/lib/next";
import { skills } from "@/app/data";
import { SkillCard } from "./SkillCard";
import { Tooltip } from "@/lib/nextui";

const colorCodes = [
    "#D84040",
    "#4B70F5",
    "#AD49E1",
    "#FFE893",
    "#FFC0CB",
    "#FFA07A",
    "#FFD700",
    "#00FF00",
    "#00FFFF",
    "#0000FF",
];

const LinkText = ({ children, href, target, color }) => {
    return (
        <Link
            href={href}
            target={target}
            className={`group relative transition-all duration-100`}
            style={{ color }}
        >
            {children}
            <span
                style={{ backgroundColor: color }}
                className={`absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300`}
            />
        </Link>
    );
};

export const aboutData = [
    {
        title: "🚀 About Me",
        image: "/images/about-card-1.png",
        theme_image: "/themes-image/about-card-1.png",
        description: () => (
            <p>
                I’m a <ImpotentText words={"Passionate Full-Stack Developer"} /> with
                strong <ImpotentText words={"Problem-Solving Skills"} />, proven by
                solving <ImpotentText words={"900+ LeetCode Problems"} />. I specialize
                in <ImpotentText words={"JavaScript"} />,{" "}
                <ImpotentText words={"TypeScript"} />, and{" "}
                <ImpotentText words={"Java"} />, crafting dynamic web apps using{" "}
                <ImpotentText words={"Next.js"} />, <ImpotentText words={"React"} />,
                and <ImpotentText words={"Express"} />. My focus is on building{" "}
                <ImpotentText words={"Scalable"} />,{" "}
                <ImpotentText words={"User-Friendly Applications"} /> while continuously
                improving my expertise in <ImpotentText words={"Cloud Technologies"} />{" "}
                like <ImpotentText words={"AWS"} /> and{" "}
                <ImpotentText words={"Google Cloud"} />.
            </p>
        ),
    },
    {
        title: "💼 Projects",
        image: "/images/about-card-2.png",
        theme_image: "/themes-image/about-card-2.webp",
        description: () => (
            <div className="w-full h-full relative text-start pl-5 flex flex-col gap-3 justify-evenly tracking-wider">
                <p className={"font-heading relative text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[0]}` }}
                    ></span>
                    <LinkText
                        href={"https://github.com/Bapparajsk/my-own-facebook"}
                        target="_blank"
                        color={colorCodes[0]}
                    >
                        <strong>My Own Facebook</strong>
                    </LinkText>{" "}
                    – A<strong>Full-Stack Social Media Web App</strong> with{" "}
                    <strong>Real-Time Interactions</strong> and a{" "}
                    <strong>Modern UI</strong>.
                </p>
                <p className={"font-heading relative text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[5]}` }}
                    ></span>
                    <LinkText
                        href={"https://github.com/Bapparajsk/component-lab"}
                        target="_blank"
                        color={colorCodes[5]}
                    >
                        <strong>Component Lab</strong>
                    </LinkText>{" "}
                    – A <strong>Full-Stack UI Component Library Web App</strong> with{" "}
                    <strong>Real-Time Interactions</strong> and a{" "}
                    <strong>Modern UI</strong>.
                </p>
                <p className={"font-heading relative text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[1]}` }}
                    ></span>
                    <LinkText
                        href={"https://github.com/Bapparajsk/portfolio"}
                        target="_blank"
                        color={colorCodes[1]}
                    >
                        <strong>3D Animated Portfolio</strong>
                    </LinkText>{" "}
                    – A <strong>Creative, Interactive Portfolio</strong> featuring{" "}
                    <strong>3D Elements</strong> to showcase skills dynamically.
                </p>
                <p className={"font-heading relative text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[2]}` }}
                    ></span>
                    <LinkText
                        href={"https://github.com/Bapparajsk/Inews"}
                        target="_blank"
                        color={colorCodes[2]}
                    >
                        <strong>iNews</strong>
                    </LinkText>{" "}
                    – A <strong>News App</strong> with <strong>Infinite Scrolling</strong>{" "}
                    and <strong>Search Functionality</strong> powered by{" "}
                    <strong>NewsAPI</strong>.
                </p>
            </div>
        ),
    },
    {
        title: "🛠️ Tools & Technologies",
        image: "/images/about-card-3.png",
        theme_image: "/themes-image/about-card-3.png",
        description: () => (
            <div className="w-full h-full relative text-start pl-5 flex flex-col gap-3 justify-evenly">
                {[
                    "Languages: JavaScript, TypeScript, Java",
                    "Frameworks: Next.js, React, Express",
                    "Databases: MongoDB, Redis",
                    "Cloud Platforms: AWS, Google Cloud, Firebase",
                    "Others: Tailwind CSS, SASS, BullMQ, Node.js Cluster",
                ].map((text, idx) => (
                    <p key={idx} className={"font-heading relative text-neutral-200"}>
                        <span
                            className={
                                "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                            }
                            style={{ backgroundColor: `${colorCodes[idx]}` }}
                        ></span>
                        <strong>{text}</strong>
                    </p>
                ))}
            </div>
        ),
    },
    {
        title: "📈 GitHub Top Languages",
        image: "/images/about-card-4.png",
        theme_image: "/themes-image/about-card-4.png",
        description: () => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });
            return (
                <div className="w-full h-full relative text-start pl-5 flex flex-col gap-3 justify-evenly">
                    {[
                        { text: "TypeScript", percentage: "71.31%", color: "#3178C6" },
                        { text: "JavaScript", percentage: "17.32%", color: "#F1E05A" },
                        { text: "CSS", percentage: "6.10%", color: "#694199" },
                        { text: "HTML", percentage: "3.56%", color: "#E34E3A" },
                        { text: "Java", percentage: "2.37%", color: "#B07226" },
                    ].map(({ text, percentage, color }, idx) => (
                        <div key={idx} className={"font-heading relative text-neutral-200"}>
                            <span
                                className={
                                    "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                                }
                                style={{ backgroundColor: color }}
                            ></span>
                            <strong>{text}</strong>
                            <div className="absolute left-32 top-0 w-[60%] h-full flex items-center overflow-hidden transition-all duration-250">
                                <Tooltip
                                    content={percentage}
                                    placement="top"
                                    color="foreground"
                                >
                                    <div className="w-full h-3 bg-neutral-600 rounded-full">
                                        <MotionDiv
                                            ref={ref}
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: percentage } : {}}
                                            transition={{ duration: 2, type: "spring", bounce: 0.25 }}
                                            className="h-full rounded-full"
                                            style={{ backgroundColor: color }}
                                        />
                                    </div>
                                </Tooltip>
                            </div>
                        </div>
                    ))}
                </div>
            );
        },
    },
    {
        title: "🏆 Achievements",
        image: "/images/about-card-5.png",
        theme_image: "/themes-image/about-card-5.png",
        description: () => (
            <div className="w-full h-full relative text-start pl-5 flex flex-col gap-3 justify-evenly">
                <p className={"font-heading relative text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[0]}` }}
                    ></span>
                    <strong>Solved 900+ LeetCode Problems</strong> – Demonstrating strong
                    problem-solving and algorithmic skills.
                </p>
                <p className={"font-heading relative  text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[7]}` }}
                    ></span>
                    <strong>Built & Launched Multiple Full-Stack Projects</strong> –
                    Including <strong>My Own Facebook</strong>, <strong>iNews</strong>,
                    and a <strong>3D Animated Portfolio</strong>.
                </p>
                <p className={"font-heading relative  text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[8]}` }}
                    ></span>
                    <strong>Optimized Backend Performance</strong> – Reduced API response
                    time in a social media app using <strong>Redis Caching</strong> and{" "}
                    <strong>MongoDB Indexing</strong>.
                </p>
                <p className={"font-heading relative  text-neutral-200"}>
                    <span
                        className={
                            "absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"
                        }
                        style={{ backgroundColor: `${colorCodes[9]}` }}
                    ></span>
                    <strong>Implemented Scalable Systems</strong> – Used{" "}
                    <strong>Node.js Cluster</strong>, <strong>BullMQ</strong>, and{" "}
                    <strong>AWS S3</strong> for high-performance applications.
                </p>
            </div>
        ),
    },
    {
        title: "🎮 Skills",
        image: "/images/about-card-6.png",
        theme_image: "/themes-image/about-card-6.jpg",
        description: () => (
            <div className="w-full h-full pl-1 flex gap-5 md:gap-2 flex-col md:flex-row">
                <div className="w-full md:w-1/2 flex flex-col gap-2 text-start">
                    <strong className="text-lg">Languages</strong>
                    <div className="flex gap-1 flex-wrap mt-2">
                        {skills.language.map((item, idx) => (
                            <SkillCard name={item} key={idx} />
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-2 text-start">
                    <strong className="text-lg">Framework</strong>
                    <div className="flex gap-1 flex-wrap mt-2">
                        {skills.framework.map((item, idx) => (
                            <SkillCard name={item} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
        ),
    },
];
