"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const roundValues = {
    "input": 10,
    "button": 15,
    "nav-button": 100,

}

const Cursor = () => {

    const isMagnetActive = useRef(false);
    const currentType = useRef(null);
    const currentTarget = useRef(null);
    const pathname = usePathname();

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const cursorWidth = useMotionValue(32);
    const cursorHeight = useMotionValue(32);
    const cursorScale = useMotionValue(1);
    const round = useMotionValue(100);
    const backgroundColor = useMotionValue("transparent");

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
    const springWidth = useSpring(cursorWidth, { stiffness: 300, damping: 20 });
    const springHeight = useSpring(cursorHeight, { stiffness: 300, damping: 20 });
    const springScale = useSpring(cursorScale, { stiffness: 300, damping: 20 });
    const springRound = useSpring(round, { stiffness: 300, damping: 20 });
    // const backgroundColorSpring = useSpring(backgroundColor, { stiffness: 300, damping: 30 });

    useEffect(() => {
        // Reset on route change
        isMagnetActive.current = false;
        currentTarget.current = null;
        cursorWidth.set(32);
        cursorHeight.set(32);
        cursorScale.set(1);
    }, [pathname]);

    useEffect(() => {
        const moveCursor = (e) => {
            const target = currentTarget.current;

            if (isMagnetActive.current && target) {
                const rect = target.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Use softer magnet effect for input
                const isInput = target.classList.contains("input");
                const strength = isInput ? 0.01 : 0.2;

                const offsetX = (e.clientX - centerX) * strength;
                const offsetY = (e.clientY - centerY) * strength;

                mouseX.set(centerX + offsetX - springWidth.get() / 2);
                mouseY.set(centerY + offsetY - springHeight.get() / 2);
            } else {
                mouseX.set(e.clientX - springWidth.get() / 2);
                mouseY.set(e.clientY - springHeight.get() / 2);
            }
        };

        const handleClick = () => {
            const el = currentTarget.current;

            const isInteractive =
                el &&
                (el.classList.contains("nav-button") ||
                    el.classList.contains("text-paragraph") ||
                    el.classList.contains("text-heading") ||
                    el.classList.contains("input"));

            if (!isInteractive) {
                cursorScale.set(1.5);
                setTimeout(() => cursorScale.set(1), 100);
            }
        };

        const handleMouseOver = (e) => {
            const navBtn = e.target.closest(".nav-button");
            const button = e.target.closest(".button, .button-full-round");
            const textBlock = e.target.closest(".text-paragraph, .text-heading, .text-heading-1");
            const inputField = e.target.closest(".input");

            const target = navBtn || button || inputField;

            if (target) {
                isMagnetActive.current = true;
                currentTarget.current = target;

                const rect = target.getBoundingClientRect();
                cursorWidth.set(rect.width + 8);
                cursorHeight.set(rect.height + 8);

                // Track type
                if (target.classList.contains("nav-button")) {
                    round.set(roundValues["nav-button"]);
                    currentType.current = "nav-button";

                } else if (target.classList.contains("button")) {
                    round.set(roundValues["button"]);
                    currentType.current = "button";
                } else if (target.classList.contains("button-full-round")) {
                    round.set("100%");
                    currentType.current = "button-full-round";
                } else if (target.classList.contains("input")) {
                    round.set(roundValues["input"]);
                    currentType.current = "input";
                }
            } else if (textBlock) {
                isMagnetActive.current = false;
                currentTarget.current = textBlock;
                backgroundColor.set("#3b82f6");

                const rect = textBlock.getBoundingClientRect();
                // const contains = textBlock.classList.contains;
                const w = textBlock.classList.contains("text-heading-1") ? 10 : textBlock.classList.contains("text-heading") ? 5 : 2;
                cursorWidth.set(w);
                cursorHeight.set(rect.height);
                round.set("100%");

                if (textBlock.classList.contains("text-paragraph")) {
                    // round.set(10);
                    currentType.current = "text-paragraph";
                } else {
                    // round.set(roundValues["text-heading"]);
                    currentType.current = "text-heading";
                }
            }
        };



        const handleMouseOut = (e) => {
            const related = e.relatedTarget;

            // If we moved from target to something else NOT inside target
            if (currentTarget.current && (!related || !currentTarget.current.contains(related))) {
                isMagnetActive.current = false;
                currentTarget.current = null;
                currentType.current = null;

                cursorWidth.set(32);
                cursorHeight.set(32);
                round.set("100%");
                cursorScale.set(1);
                backgroundColor.set("transparent");
            }
        };


        document.addEventListener("mousemove", moveCursor);
        document.addEventListener("click", handleClick);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("click", handleClick);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none border-2 border-blue-500"
            style={{
                translateX: springX,
                translateY: springY,
                width: springWidth,
                height: springHeight,
                scale: springScale,
                borderRadius: springRound,
                backgroundColor
            }}
        />
    );
};

export default Cursor;
