"use client";

import { Fragment, useEffect, useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
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
            console.log("dot", dots[idx]);
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    const sendEmail = async (e) => {
        const toastId = toast.loading("Sending your massage, please wait...");

        try {
            await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e),
            });
            
            toast.success("Your massage has been sent successfully!");
        } catch (e) {
            toast.error("Failed to send your massage, please try again!");
        } finally {
            toast.dismiss(toastId);
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const {name, email, message } = comment;

        const paramsData = {
            to_name: "Bapparaj sk",
            from_name: name,
            reply_to: email,
            message: message,
        }
        setIsSending(true);
        await sendEmail(paramsData);
        setIsSending(false);

        setComment({ name: "", email: "", message: "" });
    };

    return (
        <Fragment>
            <Toaster />
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
                                minLength={10}
                            />
                            <Button
                                color="primary"
                                variant="light"
                                loading={isSending}
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