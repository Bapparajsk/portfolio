// context/CursorContext.tsx or .js
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CursorContext = createContext(null);

export const CursorProvider = ({ children }) => {
    const [cursor, setCursor] = useState("magnetic-cursor");

    useEffect(() => {
        const saved = localStorage.getItem("currentCursorName");
        if (saved && ["magnetic-cursor", "elastic-cursor"].includes(saved)) {
            setCursor(saved);
        } else {
            localStorage.setItem("currentCursorName", cursor);
        }
    }, []);

    const setNewCursor = (name) => {
        setCursor(name);
        localStorage.setItem("currentCursorName", name);
    };

    const getCurrentName = (name = cursor) => {
        const split = name.split("-");
        return split.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    };

    const cursors = ["magnetic-cursor", "elastic-cursor"];

    return (
        <CursorContext.Provider value={{ cursor, setNewCursor, getCurrentName, cursors }}>
            {children}
        </CursorContext.Provider>
    );
};

export const useCursor = () => useContext(CursorContext);
