"use client";

import { useEffect, useRef } from "react";

const ElasticCursor = () => {
    const circleRef = useRef(null);

    useEffect(() => {
        const circleElement = circleRef.current;

        const mouse = { x: 0, y: 0 };
        const previousMouse = { x: 0, y: 0 };
        const circle = { x: 0, y: 0 };
        let currentScale = 0;
        let currentAngle = 0;

        const speed = 0.2;

        const updateMouse = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const tick = () => {
            circle.x += (mouse.x - circle.x) * speed;
            circle.y += (mouse.y - circle.y) * speed;
            const translate = `translate(${circle.x}px, ${circle.y}px)`;

            const deltaX = mouse.x - previousMouse.x;
            const deltaY = mouse.y - previousMouse.y;
            previousMouse.x = mouse.x;
            previousMouse.y = mouse.y;

            const velocity = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2) * 4, 150);
            const scaleValue = (velocity / 150) * 0.5;
            currentScale += (scaleValue - currentScale) * speed;
            const scale = `scale(${1 + currentScale}, ${1 - currentScale})`;

            const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            if (velocity > 20) currentAngle = angle;
            const rotate = `rotate(${currentAngle}deg)`;

            circleElement.style.transform = `${translate} ${rotate} ${scale}`;

            requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", updateMouse);
        requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", updateMouse);
        };
    }, []);

    return (
        <div
            ref={circleRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-blue-500 pointer-events-none z-[9999]"
            style={{ transform: "translate(-50%, -50%)", willChange: "transform" }}
        />
    );
};

export default ElasticCursor;
