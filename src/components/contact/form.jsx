"use client";

import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Textarea,
} from "@nextui-org/react";
import { BorderBeam } from "../ui/border-beam";

export default function Form() {

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm()

    const sendEmail = async (e) => {
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
        }
    };
    
    const onSubmit = async (comment) => {

        const {name, email, message } = comment;
        
        const paramsData = {
            to_name: "Bapparaj sk",
            from_name: name,
            reply_to: email,
            message: message,
        }
        
        await sendEmail(paramsData);
        reset();
    };


    return (
        <>
        <Toaster richColors={true} /> 
            <div className="relative w-full h-full p-3 overflow-hidden">
                <Card
                    isBlurred
                    className="bg-default-100/50 max-w-[700px]"
                    shadow="sm"
                >
                    <CardHeader>
                        <h3 className="text-2xl font-bold">Contact</h3>
                        <p className="text-sm ml-2 text-gray-500">
                            to bapparajsk97@gmail.com
                        </p>
                    </CardHeader>
                    <CardBody>
                        <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        variant="flat"
                                        label="Full Name"
                                        isRequired={true}
                                        errorMessage={errors.name?.message}
                                        isInvalid={errors.name}
                                        {...register("name", {
                                            required: "This field is required",
                                            minLength: { value: 3, message: "Minimum 3 characters" },
                                        })}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="email"
                                        variant="flat"
                                        label="Email"
                                        isRequired={true}
                                        errorMessage={errors.email?.message}
                                        isInvalid={errors.email}
                                        {...register("email", {
                                            required: "This field is required",
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                message: "Invalid email address",
                                            },
                                        })}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Textarea
                                        label="Message"
                                        minRows={6}
                                        maxRows={6}
                                        variant="flat"
                                        isRequired={true}
                                        errorMessage={errors.message?.message}
                                        isInvalid={errors.message}
                                        {...register("message", {
                                            required: "This field is required",
                                            minLength: { value: 20, message: "Minimum 10 characters" },
                                        })}
                                    />
                                </div>
                                <Button type="submit" isLoading={isSubmitting} >Submit</Button>
                            </div>
                        </form>
                    </CardBody>
                    <BorderBeam />
                </Card>
            </div>
        </>
    );
}
