'use client'

import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';

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

        return () => clearInterval(intervalId)

    }, []);

    return (
        <div className=" absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
            {
                fireFlies.map((fire, index) => {
                    const className = index % 2 === 0 ? 'bg-fire-dot-red' : 'bg-fire-dot-pink';
                    return (
                        <div
                            key={fire.id}
                            className={`absolute rounded-full w-[20px] h-[20px] ${className}`}
                            style={{
                                top: fire.top,
                                left: fire.left,
                                animation: `move ${fire.animationDuration} infinite alternate`
                            }}
                        />
                    );
                })
            }
        </div>
    )
}
