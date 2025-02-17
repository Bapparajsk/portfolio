"use client";

import { useEffect, useState } from "react";

export default function Intro({ children }) {
    const [showContent, setShowContent] = useState(true);

    useEffect(() => {
        const video = document.getElementById("intro-video");
        if (video) {
            video.addEventListener("ended", () => {
                setShowContent(true);
            });
        }
        
    }, []);

    return (
        <>
            {showContent ? (
                children
            ) : (
                <div className="relative h-screen w-screen overflow-hidden">
                    <video
                        id="intro-video"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        playsInline
                    >
                        <source src="/intro.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </>
    );
}
