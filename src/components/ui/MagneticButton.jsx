"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic"; // adjust path if needed

const MagneticContainer = ({ children, sensitivity = 4, isMagnetic = true, ...props }) => {
    const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic(sensitivity);

    return (
        <motion.div
            ref={ref}
            onMouseMove={isMagnetic && handleMouseMove}
            onMouseLeave={isMagnetic && handleMouseLeave}
            style={style}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MagneticContainer;
