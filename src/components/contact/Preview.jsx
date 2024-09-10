"use client";

import { IconArrowNarrowLeft, IconArrowNarrowRight, IconLayoutDashboard, IconLock, IconMenu2, IconRotate, IconSeparator, IconSquareToggle } from "@tabler/icons-react";
import { X } from "lucide-react";
import { PreviewPage } from "./PreviewPage";

export const Preview = () => {

    const iconClassName = "text-gray-400 hover:text-white cursor-pointer duration-400";

    return (
        <div className={"w-full h-full flex flex-col items-start border-l-1 border-l-gray-500"}>
            <div className={"relative w-full h-10 flex items-center justify-between bg-black"}>
                <div className={"w-auto h-full cursor-pointer flex items-center gap-x-2 font-mono bg-gray-800/80 text-gray-500 px-2 border-t-1 border-t-red-500 border-r-1 border-r-gray-600 rounded-tr-sm hover:bg-gray-800 hover:text-white duration-300"}>
                    <IconLayoutDashboard size={20}/>
                    <span>Document</span>
                    <X size={20}/>
                </div>
                <div className={"w-auto h-full flex items-center justify-center gap-x-3 px-2"}>
                    <IconSquareToggle size={20} className={iconClassName}/>
                    <IconLock size={20} className={iconClassName}/>
                    <IconSeparator size={20} className={iconClassName}/>
                </div>
            </div>
            <div className={"w-full h-10 flex items-center justify-between bg-gray-800/80"}>
                <div className={"w-auto h-full flex items-center justify-center gap-x-2 ml-2 text-gray-400"}>
                    <div className={"w-auto h-full flex items-center justify-center gap-x-3"}>
                        <IconArrowNarrowLeft size={20} className={iconClassName}/>
                        <IconArrowNarrowRight size={20} className={iconClassName}/>
                        <IconRotate size={20} className={iconClassName}/>
                    </div>
                    <span>http://127.0.0.1:3000</span>
                </div>
                <div className={"w-auto h-full flex items-center justify-center gap-x-3 mr-2"}>
                    <IconMenu2 size={20} className={iconClassName}/>
                </div>
            </div>
            <div className="w-full h-full">
                <PreviewPage />
            </div>
        </div>
    )
}