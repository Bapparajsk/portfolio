"use client";

import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Textarea, Tooltip } from "@nextui-org/react";
import { Toaster, toast } from "sonner";
import useScreenSize from "@/hooks/useScreenSize";
import { Minus, Square, X } from "lucide-react";
import { TopManu } from "./TopManu";
import { IconsManu } from "./IconsManu";
import { CodeEditor } from "./Editor";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();
    const [isSending, setIsSending] = useState(false);
    const size = useScreenSize();

    const sendEmail = async (e) => {
        const getcount = localStorage.getItem("mailCount");
        if (getcount && parseInt(getcount) >= 5) {
            toast.error(
                "You have reached maximum limit to send mail, please try again later!"
            );
            return;
        }

        const toastId = toast.loading("Sending your massage, please wait...");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(e),
            });

            if (res.ok) {
                toast.success("Your massage has been sent successfully!");
            } else {
                toast.error("Failed to send your massage, please try again!");
            }
            localStorage.setItem("mailCount", getcount ? parseInt(getcount) + 1 : 1);
            setValue("name", "");
            setValue("email", "");
            setValue("massage", "");
        } catch (e) {
            toast.error("Failed to send your massage, please try again!");
        } finally {
            toast.dismiss(toastId);
        }
    };

    const onSubmit = (data) => {
        const paramsData = {
            to_name: "bapparaj",
            from_name: data.name,
            reply_to: data.email,
            massage: data.massage,
        };
        setIsSending(true);
        sendEmail(paramsData);
        setIsSending(false);
    };

    return (
        <div className={"w-[100vw] h-[100vh] p-4"}>
            <div className=" relative w-full h-full border-1 border-gray-700 rounded-[15px] overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-auto bg-gray-500/50 flex flex-col items-center justify-end">
                    <div className="w-full h-8 flex items-center justify-end pr-3">
                        <WindowButton iconName={"Minus"} />
                        <WindowButton iconName={"Square"} />
                        <WindowButton iconName={"X"} color={"blue"} isCloseicon={true} />
                    </div>
                    <div className="w-full h-8 bg-gray-800/90 flex items-center justify-start">
                        <TopManu />
                    </div>
                </div>
                <div className="absolute w-full h-full left-0 top-16 flex">
                    <div className={"w-auto h-full px-2 pt-2 border-r-1 border-gray-600"}>
                        <IconsManu />
                    </div>
                    <div className="w-1/2 h-full">
                        <CodeEditor />
                    </div>
                    <div className="w-1/2 h-full bg-red-500">

                    </div>
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
