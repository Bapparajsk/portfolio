'use client'

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const createFirefly = () => ({
    id: uuidv4(),
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 5 + 5}s`,
})

export const FireFliesBackground = () => {

    const [fireFlies, setFireFlies] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFireFlies(prevState => {
                if (prevState.length >= 50) {
                    clearInterval(intervalId);
                    return prevState;
                }
                return [...prevState, createFirefly()];
            });
        }, 1000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden flex items-center justify-center">
            <div className="w-screen h-screen bg-[#1a213a] shadow-[0_0_400px_84px_rgb(0,0,0)_inset]"/>
        </div>
    );
}
