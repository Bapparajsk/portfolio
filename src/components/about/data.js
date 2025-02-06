import { ImpotentText } from "@/components/ui/impotent-text";
import { MotionDiv, useInView } from "@/lib/motion";
import { useRef } from "react";

const colorCodes = [
    "D84040", "4B70F5", "AD49E1", "FFE893", "FFC0CB", "FFA07A", "FFD700", "00FF00", "00FFFF", "0000FF"
]


export const aboutData = [
    {
        title: "🚀 About Me",
        image: "/images/about-card-1.png",
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
            <div className="w-full h-full relative text-start pl-5 flex flex-col justify-evenly">
                <p className={"font-heading relative tracking-tight text-neutral-200"}>
                    <span
                        className={"absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"}
                        style={{ backgroundColor: `#${colorCodes[0]}` }}
                    ></span>
                    <strong>My Own Facebook</strong> – A{" "}
                    <strong>Full-Stack Social Media Web App</strong> with{" "}
                    <strong>Real-Time Interactions</strong> and a{" "}
                    <strong>Modern UI</strong>.
                </p>
                <p className={"font-heading relative tracking-tight text-neutral-200"}>
                    <span
                        className={"absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"}
                        style={{ backgroundColor: `#${colorCodes[1]}` }}
                    ></span>
                    <strong>3D Animated Portfolio</strong> – A{" "}
                    <strong>Creative, Interactive Portfolio</strong> featuring{" "}
                    <strong>3D Elements</strong> to showcase skills dynamically.
                </p>
                <p className={"font-heading relative tracking-tight text-neutral-200"}>
                    <span
                        className={"absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"}
                        style={{ backgroundColor: `#${colorCodes[2]}` }}
                    ></span>
                    <strong>iNews</strong> – A <strong>News App</strong> with{" "}
                    <strong>Infinite Scrolling</strong> and{" "}
                    <strong>Search Functionality</strong> powered by{" "}
                    <strong>NewsAPI</strong>.
                </p>
            </div>
        ),
    },
    {
        title: "🛠️ Tools & Technologies",
        image: "/images/about-card-3.png",
        description: () => (
            <div className="w-full h-full relative text-start pl-5 flex flex-col justify-evenly">
                {[
                    "Languages: JavaScript, TypeScript, Java",
                    "Frameworks: Next.js, React, Express",
                    "Databases: MongoDB, Redis",
                    "Cloud Platforms: AWS, Google Cloud, Firebase",
                    "Others: Tailwind CSS, SASS, BullMQ, Node.js Cluster",
                ].map((text, idx) => (
                    <p
                        key={idx}
                        className={"font-heading relative tracking-tight text-neutral-200"}
                    >
                        <span
                            className={"absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"}
                            style={{ backgroundColor: `#${colorCodes[idx]}` }}
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
        description: () => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true })
            return (
                <div className="w-full h-full relative text-start pl-5 flex flex-col justify-evenly">
                    {[
                        { text: "TypeScript", percentage: "71.31%", color: "#3178C6" },
                        { text: "JavaScript", percentage: "17.32%", color: "#F1E05A" },
                        { text: "CSS", percentage: "6.10%", color: "#694199" },
                        { text: "HTML", percentage: "3.56%", color: "#E34E3A" },
                        { text: "Java", percentage: "2.37%", color: "#B07226" },
                    ].map(({ text, percentage, color }, idx) => (
                        <div
                            key={idx}
                            className={"font-heading relative tracking-tight text-neutral-200"}
                        >
                            <span
                                className={"absolute block -left-5 rounded-tr-full rounded-br-full top-0 z-20 h-full w-[6px]"}
                                style={{ backgroundColor: color }}
                            ></span>
                            <strong>{text}</strong>
                            <div className="absolute left-32 top-0 w-[400px] h-full flex items-center overflow-hidden">
                                <div className="w-full h-3 bg-neutral-600 rounded-full">
                                    <MotionDiv
                                        ref={ref}
                                        initial={{ width: 0 }}
                                        animate={isInView ? { width: percentage }: {}}
                                        transition={{ duration: 2, type: "spring", bounce: .25 }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: color }}
                                    ></MotionDiv>
                                </div>
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
        description: () => (
            <p>
                I have been <ImpotentText words={"Recognized"} /> by{" "}
                <ImpotentText words={"Google"} /> for my{" "}
                <ImpotentText words={"Open-Source Contributions"} />. I have also won{" "}
                <ImpotentText words={"Multiple Hackathons"} /> and{" "}
                <ImpotentText words={"Coding Competitions"} />.
            </p>
        ),
    },

];
