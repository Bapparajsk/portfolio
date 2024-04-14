'use client'

import React, {useEffect, useRef, useState} from 'react';
import {ProjectData} from "@/app/data";
import {ProjectContainer} from "./ProjectContainer";
import {Button} from "@nextui-org/react";

export const ProjectsList = () => {
    const scrollRef = useRef(null);
    return (

        <div className={'w-full h-full mb-[80px] relative mt-20'}  id="scroll-id">
            <div ref={scrollRef} className={'w-full h-[80px] flex items-end justify-center'}>
                <Button
                    color="primary"
                    variant="bordered"

                    className={'text-2xl py-8 px-10'}
                >
                    My Projects
                </Button>
            </div>
            <div className={'w-full h-auto'}>
                {
                    ProjectData.map((item, index) => {
                        return <ProjectContainer key={index} {...item}/>
                    })
                }
            </div>
            <div className={'center w-[3px] h-full bg-amber-50 mt-[80px]'}/>
        </div>
    )
}
