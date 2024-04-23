'use client'

import React, {useEffect, useRef} from "react";
import {Player} from "@lordicon/react";
import ICON from "@/assets/icon/share.json";
import useScreenSize from "@/hooks/useScreenSize";


export const ScrollButtonDown = () => {

    const iconRef = useRef(null);

    useEffect(() => {
        iconRef.current?.playFromBeginning();
    }, []);

    const size = useScreenSize();
    const isSmall = size <= 460;


    return !isSmall && (
        <div className={'w-full h-[100px] flex  items-start justify-center absolute bottom-0'}>
            <div
                className={'w-[100px] h-[100px] z-20 flex items-center justify-center cursor-pointer hover:scale-[1.1] transition-all image-back-shadow'}
                style={{transform: 'rotate(180deg)'}}
                onClick={() => { document.getElementById('scroll-id').scrollIntoView({behavior: 'smooth'})}}
            >
                <Player
                    ref={iconRef}
                    size={100}
                    icon={ICON}
                    state={"hover-slide"}
                    onComplete={() => iconRef.current?.playFromBeginning()}
                />
            </div>
        </div>
    )
}
