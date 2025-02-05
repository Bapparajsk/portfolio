import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Image from "next/image";

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
                <ProjectCard idx={i+1}/>
            ))}
        </div>
    );
}

const ProjectCard = ({ title, description, image, link, idx }) => {
    const cardRef = useRef(null);
    useEffect(() => {
        const card = cardRef.current;
        const scale = idx === 1 ? 0.65 : idx === 2 ? 0.70 : idx === 3 ? 0.75 : idx === 4 ? 0.80 : 0.85;
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: `top ${idx * 3}%`,
                end: `top ${idx * 3}%`,
                markers: true,
                onEnter: () => gsap.to(card, { scale, y: -100 }),
                onLeaveBack: () => gsap.to(card, { scale: 1, y: 0 }),
            },
        });
    }, []);

    return (
        <Card ref={cardRef} style={{
            top: `${idx * 6}vh`,
        }} className={`flex-row max-w-7xl mx-auto mb-5 sticky z-50 "}`}>
            <CardBody>
                <div className={`flex flex-row ${idx % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                    <div className="w-[35%] h-96"></div>
                    <div className={`flex-grow `}>
                        <Image src={"/themes-image/about-card-1.png"} width={500} height={500} alt="image"/>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
