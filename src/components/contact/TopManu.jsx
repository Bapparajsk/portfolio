"use client";

import {manu} from "./data";

import {Tooltip, Button} from "@nextui-org/react";

export const TopManu = () => {

    const manuKeys = ["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"];
    
    return (
        <div className="w-auto h-full flex items-center justify-center">
            {manuKeys.map((key) => (
                <div key={key} className="h-full flex items-center justify-center px-2 cursor-pointer">
                    <Tooltip 
                        content={<TooltipContent data={manu[key]}/>}
                        placement={"bottom-start"}
                    >
                        <span>{key}</span> 
                    </Tooltip>
                    
                </div>
            ))}
        </div>
    )
}

const TooltipContent = ({data}) => {
    return (
        <div className="h-auto py-4 flex flex-col gap-2 ">
            {data.map((item) => {
                if (item === "<hr>") {
                    return <hr key={item} />
                    
                }
                return <Button key={item} className={"bg-transparent hover:bg-gray-400 duration-500 hover:text-black"}>{item}</Button>
                })}
        </div>
    );
}