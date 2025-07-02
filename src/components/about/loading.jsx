"use client";

import { useEffect } from "react";
import {useAnimate} from "framer-motion";

const LoadingAnimation = () => {

    const [scope, animate] = useAnimate();

    const animateLoading = async () => {
        const config = {
            duration: 0.3,
        };

        await new Promise((resolve) => setTimeout(resolve, 700));

        await Promise.all([
            animate("#div1", { borderColor: "transparent" }, { duration: 0 }),
            animate("#div2", { borderColor: "transparent" }, { duration: 0 })
        ]);

        await animate("#progress-bar", { height: "35%" }, { ...config });
        await animate("#progress-bar", { height: "50%" }, { ...config });
        await animate("#progress-bar", { height: "65%" }, { ...config });
        await animate("#progress-bar", { height: "95%" }, { ...config });
        await animate("#progress-bar", { height: "100%" }, { ...config });
        await animate("#progress-bar", { opacity: 0 }, { duration: 0 });
        await animate("#progress-container", { opacity: 0 }, { duration: 0 });

        await Promise.all([
            animate("#div1", { borderColor: "#64D4EE" }, { duration: 0 }),
            animate("#div2", { borderColor: "#64D4EE" }, { duration: 0 }),
        ]);

        await Promise.all([
            animate("#div1", { x: "-105%" }, { duration: 1 }),
            animate("#div2", { x: "105%" }, { duration: 1 }),
            animate("#h3-1", { opacity: 0, }, { duration: 0.5 }),
            animate("#h3-2", { opacity: 0, }, { duration: 0.5 }),
        ]);
 
        scope.current.style.display = "none";
    };

    useEffect(() => {
        animateLoading()
    }, []);

    return (
        <div ref={scope}id="root" className="fixed w-full h-screen z-40 top-0 left-0 flex justify-between overflow-x-hidden">
            <div id="div1" className="w-1/2 h-screen bg-white dark:bg-[#041020] border-r-[2px] border-transparent relative">
                <h3 id="h3-1" className="text-heading-1 text-7xl text-black dark:text-white font-bold absolute top-1/2 transform -translate-y-1/2 right-5">
                    About
                </h3>
            </div>
            <div id="div2" className="w-1/2 h-screen  bg-white dark:bg-[#041020] border-l-[2px] border-transparent relative">
                <h3 id="h3-2" className="text-heading-1 text-7xl text-black dark:text-white font-bold absolute top-1/2 -translate-y-1/2 left-5">
                    Me
                </h3>
            </div>

            <div id="progress-container"
                className="absolute left-1/2 -translate-x-1/2 top-0 h-screen w-5 flex items-center justify-center"
            >
                <div id="progress-bar"
                    className="w-1.5 h-0 bg-[#64D4EE] rounded-full origin-top"
                />
            </div>
        </div>
    )
}

export default LoadingAnimation;