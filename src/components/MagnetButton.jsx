'use client'


import {Button} from "@nextui-org/react";
import gsap from "gsap";
import {useEffect, useState} from "react";

export const MagnetButton = ({ name, color,mouseHover, setMouseHover }) => {



    useEffect(() => {
        const button = document.getElementById('button');
        let boundingRect = button.getBoundingClientRect();

        window.addEventListener('resize', () => {
            boundingRect = button.getBoundingClientRect();
        });

        button.addEventListener('mousemove', (e) => {
            const mousePosX = e.x - boundingRect.left;
            const mousePosY = e.y - boundingRect.top;

            gsap.to(button, {
                x: (mousePosX - boundingRect.width / 2) * 0.4,
                y: (mousePosY - boundingRect.height / 2) * 0.4,
                duration: 0.8,
                ease: 'power3.out',
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'elastic.out(1,0.3)'
            });
        });
    }, []);

    return (
        <button
            id={'button'}
            className="inline-flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-400 text-white font-semibold py-4 px-6 rounded-full shadow-md w-32 h-32 focus:outline-none"
            // variant="shadow"
            // style={{
            //     top: mouseHover ? top : '50%',
            //     transition: 'all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
            //     animationDelay: mouseHover? '0.1s': '',
            //     backgroundColor: `#${color}`,
            // }}
            // onMouseOver={() => setMouseHover(true)}
            // onMouseOut={() => setMouseHover(false)}
        >
            {name}
        </button>
    )
}
