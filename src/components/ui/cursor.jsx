"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation"; // 🧠 hook to detect page change

const Cursor = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

    const cursorWidth = useMotionValue(32);
    const cursorHeight = useMotionValue(32);
    const springWidth = useSpring(cursorWidth, { stiffness: 300, damping: 20 });
    const springHeight = useSpring(cursorHeight, { stiffness: 300, damping: 20 });

    const isMagnetActive = useRef(false);
    const currentTarget = useRef(null);

    const pathname = usePathname(); // 📍 track route changes

    useEffect(() => {
        // 🧹 Reset everything when the route changes
        isMagnetActive.current = false;
        currentTarget.current = null;
        cursorWidth.set(32);
        cursorHeight.set(32);
    }, [pathname]);

    useEffect(() => {
        const moveCursor = (e) => {
            if (isMagnetActive.current && currentTarget.current) {
                const rect = currentTarget.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const offsetX = (e.clientX - centerX) * 0.3;
                const offsetY = (e.clientY - centerY) * 0.3;

                mouseX.set(centerX + offsetX - springWidth.get() / 2);
                mouseY.set(centerY + offsetY - springHeight.get() / 2);
            } else {
                mouseX.set(e.clientX - springWidth.get() / 2);
                mouseY.set(e.clientY - springHeight.get() / 2);
            }
        };

        const handleClick = () => {
            cursorWidth.set(50);
            cursorHeight.set(50);
            setTimeout(() => {
                if (!isMagnetActive.current) {
                    cursorWidth.set(32);
                    cursorHeight.set(32);
                }
            }, 100);
        };

        const handleMouseOver = (e) => {
            const navBtn = e.target.closest(".nav-button");
            if (navBtn) {
                isMagnetActive.current = true;
                currentTarget.current = navBtn;

                const rect = navBtn.getBoundingClientRect();
                cursorWidth.set(rect.width);
                cursorHeight.set(rect.height);
            }
        };

        const handleMouseOut = (e) => {
            const navBtn = e.target.closest(".nav-button");
            if (navBtn) {
                isMagnetActive.current = false;
                currentTarget.current = null;
                cursorWidth.set(32);
                cursorHeight.set(32);
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
            className="fixed top-0 left-0 z-50 pointer-events-none rounded-full border-2 border-blue-500"
            style={{
                translateX: springX,
                translateY: springY,
                width: springWidth,
                height: springHeight,
            }}
        />
    );
};

export default Cursor;
