"use client";

import React, { useState } from "react";
import { Image } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Minus, Square, X } from "lucide-react";
import { TopManu } from "./TopManu";
import { IconsManu } from "./IconsManu";
import { CodeEditor } from "./Editor";
import { Preview } from "./Preview";
import useScreenSize from "@/hooks/useScreenSize";

export default function Form() {

    const size = useScreenSize();

    return (
        <div className={"w-[100vw] h-[100vh] p-4"}>
            <div className=" relative w-full h-full border-1 border-gray-700 rounded-[15px] overflow-hidden">
                <div
                    className={`absolute top-0 left-0 w-full h-auto bg-gray-500/50 flex flex-col items-center justify-end`}>
                    <div className="w-full h-8 flex items-center justify-end pr-3">
                        <WindowButton iconName={"Minus"} />
                        <WindowButton iconName={"Square"} />
                        <WindowButton iconName={"X"} color={"blue"} isCloseicon={true} />
                    </div>
                    {size >= 1030 && <div className="w-full h-8 bg-gray-800/90 flex items-center justify-start">
                        <TopManu />
                    </div>}
                </div>
                <div className="absolute w-full h-full left-0 top-16 flex">
                    {size >= 1030 && <div className={"w-auto h-full px-2 pt-2 border-r-1 border-gray-600"}>
                        <IconsManu />
                    </div>}
                    {size >= 1030 && <div className="w-1/2 h-full flex flex-col">
                        <div className={"w-full h-12 flex bg-black items-center justify-between"}>
                            <div className={"w-auto h-full flex items-center justify-center gap-x-2 px-3 cursor-pointer"}>
                                <Image src={"/svg/icons8-react.svg"} width={'20'}/>
                                <span className="font-mono">Form.jsx</span>
                            </div>
                        </div>
                        <CodeEditor />
                    </div>}
                    <div className={`w-${size >= 1030 ? "1/2" : "full"}  h-full`}>
                        <Preview />
                    </div>
                    
                </div>
                <div className="w-full h-8 absolute bottom-0 left-0 flex items-center justify-start bg-black px-3 font-mono">
                    <Breadcrumbs>
                        <BreadcrumbItem>src</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Contact</BreadcrumbItem>
                        <BreadcrumbItem>Form.jsx</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    );
}


const WindowButton = ({ iconName, className, color, isCloseicon }) => {
    color = color || "#575353";

    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div
            className={`w-${isCloseicon ? "5" : 4} h-${isCloseicon ? "5" : 4
                } rounded-[50%] mx-1 flex items-center justify-center cursor-pointer`}
            style={{ backgroundColor: color }}
            onMouseEnter={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
        >
            {iconName === "Minus" ? (
                <Minus size={10} color="#fff" className={!mouseOver && "hidden"} />
            ) : iconName === "Square" ? (
                <Square size={10} color="#fff" className={!mouseOver && "hidden"} />
            ) : iconName === "X" ? (
                <X size={15} color={mouseOver ? "#FFFFFF" : "#000000"} />
            ) : null}
        </div>
    );
};
