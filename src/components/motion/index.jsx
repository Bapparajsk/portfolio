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

export {
    motion,
    MotionLink,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform, 
    useScroll,
    animate,
    useAnimation,
    stagger,
    useInView,
    useAnimate,
};