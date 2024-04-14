'use client'

import React, {useEffect, useRef, useState} from 'react';
import {ProjectData} from "@/app/data";
import {ProjectContainer} from "./ProjectContainer";
import { Player } from '@lordicon/react';
const ICON = require('@/assets/icon/share.json');

export const ProjectsList = () => {

    const iconRef = useRef(null);
    const scrollRef = useRef(null);

    useEffect(() => {
        iconRef.current?.playFromBeginning();
    }, []);

    return (
        <div className={'w-full h-full relative mb-20'}>
            <div className={'w-full h-[100px] flex items-start justify-center absolute top-[-120px]'}>
                <div className={'w-[100px] h-[100px] z-20 flex items-center justify-center cursor-pointer hover:scale-[1.1] transition-all image-back-shadow'}
                    style={{
                        transform: 'rotate(180deg)'
                    }}
                    onClick={() => {
                        scrollRef.current.scrollIntoView({ behavior: 'smooth'});
                    }}
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
            <div ref={scrollRef}>
                {
                    ProjectData.map((item, index) => {
                        return <ProjectContainer key={index} {...item}/>
                    })
                }
            </div>

            <div className={'center w-[3px] h-full bg-amber-50'}/>
        </div>
    )
}
