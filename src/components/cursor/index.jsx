"use client";

import { useCursor } from "@/context/CursorContext";
import ElasticCursor from "./ElasticCursor";
import MagneticCursor from "./MagneticCursor";
import useScreenSize from "@/hooks/useScreenSize";

export const Cursor = () => {
    const { cursor } = useCursor();
    const screenSize = useScreenSize();

    if(!screenSize || screenSize < 640) {
        return null; // Hide cursor on small screens
    }

    return (
        <>
            {cursor === "elastic-cursor" && <ElasticCursor />}
            {cursor === "magnetic-cursor" && <MagneticCursor />}
        </>
    )
}
