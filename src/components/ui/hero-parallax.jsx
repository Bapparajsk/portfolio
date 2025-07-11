"use client";

import React from "react";
import { MotionDiv, useScroll, useTransform, useSpring } from "@/lib/motion";
import { Link, Image } from "@/lib/next";
 
import { products } from "@/app/data";

export const HeroParallax = () => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(0, 5);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
    const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
    const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
    const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
    const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
    const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
            <Header />
            <MotionDiv
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}>
                <MotionDiv className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </MotionDiv>
                <MotionDiv className="flex flex-row  mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard product={product} translate={translateXReverse} key={product.title} />
                    ))}
                </MotionDiv>
                <MotionDiv className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard product={product} translate={translateX} key={product.title} />
                    ))}
                </MotionDiv>
            </MotionDiv>
        </div>
    );
};

export const Header = () => {
    return (
        <div 
            className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-40">
            <h1 className="text-2xl md:text-7xl font-bold text-black dark:text-white text-hh">
                <span className="text-heading-1">Welcome to My</span>
                <br />
                <span className="text-heading-1"> Project Showcase</span> 
            </h1>
            <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 text-neutral-800">
                <span className="text-paragraph">Here you can find a collection of my projects, each with a unique</span> <br />
                <span className="text-paragraph">story and purpose. I have poured my creativity and passion into</span> <br />
                <span className="text-paragraph">developing these projects, aiming to solve real-world problems</span> <br />
                <span className="text-paragraph">and deliver exceptional user experiences. My project showcases</span> <br />
                <span className="text-paragraph">my skills in full stack development and problem-solving. Feel free</span> <br />
                <span className="text-paragraph">to explore and discover the innovative solutions I have created.</span>
            </p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate
}) => {
    return (
        <MotionDiv
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0">
            <Link href={product.link} className="block group-hover/product:shadow-2xl ">
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title} />
            </Link>
            <div
                className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black cursor-none"></div>
            <h2
                className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                {product.title}
            </h2>
        </MotionDiv>
    );
};
