"use client";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform,
    useScroll,
    animate,
    useAnimation,
    stagger,
    useInView,
    useAnimate
} from 'framer-motion';
import Link from "next/link";

const MotionLink = motion.create(Link);
const MotionH1 = motion.create("h1");
const MotionDiv = motion.create("div");
const MotionSpan = motion.create("span");

export {
    motion,animate, stagger, AnimatePresence, useMotionValue, useSpring,
    useTransform, useScroll, useAnimation, useInView, useAnimate,
    // Custom components
    MotionLink, MotionH1, MotionDiv, MotionSpan,
};
