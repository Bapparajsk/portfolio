'use client'

import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import useScreenSize from '@/hooks/useScreenSize';

export default function Form() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [isSending, setIsSending] = useState(false);
    const size = useScreenSize();

    const sendEmail = async (e) => {

        const getcount = localStorage.getItem("mailCount");
        if (getcount && parseInt(getcount) >= 5) {
            toast.error("You have reached maximum limit to send mail, please try again later!");
            return;
        }

        const toastId = toast.loading("Sending your massage, please wait...");

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
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

    const onSubmit = data => {
        const paramsData = {
            to_name: "bapparaj",
            from_name: data.name,
            reply_to: data.email,
            massage: data.massage,
        }
        setIsSending(true);
        sendEmail(paramsData);
        setIsSending(false);
    };

    return (
        <Fragment>
            <Toaster richColors={true} position={size <= 760 ? "top-right" : "bottom-right"} />
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
            >
                <Input
                    type="text"
                    variant={"underlined"}
                    label="Name"
                    isInvalid={errors.name && true}
                    errorMessage={errors.name && errors.name.message}

                    {...register("name", {
                        required: "this field is required!",
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long.',
                        }
                    })}
                />
                <Input
                    type={"email"}
                    variant={"underlined"}
                    label="Email"
                    isInvalid={errors.email && true}
                    errorMessage={errors.email && errors.email.message}

                    {...register("email", { required: "this field is required!" })}
                />
                <Textarea
                    label="Description"
                    variant="underlined"
                    labelPlacement={"inside"}
                    className="max-w-xs"
                    minRows={2}
                    fullWidth
                    isInvalid={errors.massage && true}
                    errorMessage={errors.massage && errors.massage.message}

                    {...register("massage", {
                        required: "this field is required!",
                        maxLength: {
                            value: 500,
                            message: 'Maximum message should be less than 500 characters.',
                        },
                        minLength: {
                            value: 50,
                            message: 'Minimum message should be more than 50 characters.',
                        }
                    })}
                />
                <Button
                    color="primary"
                    variant="light"
                    loading={isSending}
                    type={'submit'}
                    className={'border-2 border-[#7A0BC0]/30 border-solid shadow-lg hover:shadow-glass-sm'}>
                    Cast Your Massage!
                </Button>
            </form>
        </Fragment>
    );
}
