"use client"

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Image } from "@/lib/next";

gsap.registerPlugin(ScrollTrigger);

export function AboutDetails() {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: true,
                pin: true,
                pinSpacing: false,
            },
        });

        const titleAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "top top",
                end: "+=20 top",
                scrub: true,
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });

        titleAnimation.fromTo(".card-title", { opacity: 1 }, { opacity: 0 });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <div className="card-title absolute bottom-[-80dvh] z-10 left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                    <p className="text-paragraph">
                        Hay there! I'm <span className="text-amber-500">Bapparaj</span>
                    </p>
                    <p className="text-gray-500">
                        <span className="text-paragraph">I'm a Software Developer based in india. I have a passion for</span> <br />
                        <span className="text-paragraph"> web development and love to create new things.</span>
                    </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                    <Image
                        width={3000}
                        height={3000}
                        loading="lazy"
                        src="/themes-image/about-card.jpg"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
