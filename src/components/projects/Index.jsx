import React from 'react';
import { codeLingList } from "@/app/data";
import {ListButton} from "@/components/projects/ListButton";
import Link from "next/link";
import {ProjectContainer} from "@/components/projects/ProjectContainer";

export const ProjectsList = () => {
    return (
        <div className={'w-full h-full relative mb-20'}>
            <ProjectContainer isRight={false}/>
            <ProjectContainer isRight={true}/>
            <ProjectContainer isRight={false}/>
            <ProjectContainer isRight={true}/>
            <div className={'center w-[3px] h-full bg-amber-50'}/>
        </div>
    )
}
