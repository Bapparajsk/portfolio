"use client";

import { useCursor } from "@/context/CursorContext";
import ElasticCursor from "./ElasticCursor";
import MagneticCursor from "./MagneticCursor";

export const Cursor = () => {
    const { cursor } = useCursor();


    return (
        <>
            {cursor === "elastic-cursor" && <ElasticCursor />}
            {cursor === "magnetic-cursor" && <MagneticCursor />}
        </>
    )
}
