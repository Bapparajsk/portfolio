'use client'

import React from 'react';
import { ProjectData } from "@/app/data";
import { Card } from "@/components/projects/Card"

export const ProjectsList = () => {

    return (
        <div className={"w-full h-auto flex flex-col items-center justify-center flex-wrap"}>
            <div className='w-full flex flex-wrap gap-6 items-center justify-around'>
                {
                    ProjectData.map((item, idx) => (
                        <Card key={idx} {...item} />
                    ))
                }
            </div>
        </div>
    )
}