// hooks/useMagnetic.ts
import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export const useMagnetic = (sensitivity = 6) => {
    const ref = useRef(null);

    const xRaw = useMotionValue(0);
    const yRaw = useMotionValue(0);

    // Wrap with smooth spring
    const x = useSpring(xRaw, { stiffness: 300, damping: 20 });
    const y = useSpring(yRaw, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const offsetX = (mouseX - centerX) / sensitivity;
        const offsetY = (mouseY - centerY) / sensitivity;

        xRaw.set(offsetX);
        yRaw.set(offsetY);
    };

    const handleMouseLeave = () => {
        xRaw.set(0);
        yRaw.set(0);
    };

    return {
        ref,
        style: { x, y },
        handleMouseMove,
        handleMouseLeave,
    };
};
