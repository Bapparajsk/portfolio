"use client";

import { Fragment, useEffect, useState } from "react";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Toaster, toast } from 'sonner';

export const PreviewPage = () => {
    const [dot, setDot] = useState(".");

    const [comment, setComment] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        const dots = [".", "..", "..."];
        let idx = 0;
        let direction = 1;

        const interval = setInterval(() => {
            idx += direction;
            if (idx === dots.length || idx === -1) {
                direction *= -1; // Reverse direction
                idx += direction; // Correct index after reversing
            }
            setDot(dots[idx]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const sendEmail = async (e) => {
        setIsSending(true);
        const toastId = toast.loading("Sending your massage, please wait...");
        try {
            const res =  await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e),
            });

            if(res.status === 429) {
                throw new Error("Your meassage limit has been exceeded, please 1 day later!");
            }

            if (!res.ok) {
                throw new Error("Failed to send your massage, please try again!");
            }

            toast.success("Your massage has been sent successfully!");
        } catch (e) {
            toast.error(e.message);
        } finally {
            toast.dismiss(toastId);
            setIsSending(false);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const {name, email, message } = comment;
        console.log(name, email, message);
        
        const paramsData = {
            to_name: "Bapparaj sk",
            from_name: name,
            reply_to: email,
            message: message,
        }
        
        await sendEmail(paramsData);
        setComment({ name: "", email: "", message: "" });
    };

    return (
        <Fragment>
            <Toaster richColors={true}/>
            <div className={"w-full h-full flex items-start"}>
                <div className="w-full h-full flex flex-col">
                    <div className={"w-full h-1/5 flex items-end justify-center"}>
                        <h1 className="text-[25px] font-mono font-bold">
                            Drop Your
                            <span className="text-[#7A0BC0] font-semibold"> Comments{dot}</span>
                        </h1>
                    </div>
                    <div className="w-full h-4/5 flex items-center justify-center">
                        <form
                            onSubmit={onSubmit}
                            className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
                        >
                            <Input
                                type="text"
                                variant={"underlined"}
                                label="Name"
                                value={comment.name}
                                onValueChange={(name) => setComment((prev) => ({...prev, name:name}))}
                                isRequired
                            />
                            <Input
                                type={"email"}
                                variant={"underlined"}
                                label="Email"
                                value={comment.email}
                                onValueChange={(email) => setComment((prev) => ({...prev, email:email}))}
                                isRequired
                            />
                            <Textarea
                                label="Description"
                                variant="underlined"
                                labelPlacement={"inside"}
                                className="max-w-xs"
                                minRows={2}
                                fullWidth
                                value={comment.message}
                                onValueChange={(message) => setComment((prev) => ({...prev, message:message}))}
                                isRequired
                            />
                            <Button
                                color="primary"
                                variant="light"
                                loading={false}
                                type={"submit"}
                                className={
                                    "border-2 border-[#7A0BC0]/30 border-solid shadow-lg hover:shadow-glass-sm"
                                }
                            >
                                Cast Your Massage!
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
