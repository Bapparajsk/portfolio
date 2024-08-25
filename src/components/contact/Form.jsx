'use client'

import React, { Fragment, use, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

export default function Form() {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const sendEmail = (e) => {
        const toastId = toast.loading("Sending your massage, please wait...");

        const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

        if (!SERVICE_ID || !TEMPLATE_ID) {
            toast.error("Service ID or Template ID is missing, please contact the developer.", {
                id: toastId
            });
            return;
        }

        emailjs
            .send(
                SERVICE_ID,
                TEMPLATE_ID,
                e,
                {
                    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                    limitRate: {
                        throttle: 5000,
                    }
                }
            )
            .then(
                () => {
                    toast.success('Email sent successfully.', {
                        id: toastId
                    });
                },
                (error) => {
                    toast.error(error.message || "something was wrong", {
                        id: toastId
                    });
                },
            );
    };

    const onSubmit = data => {
        const paramsData = {
            to_name: "bapparaj",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        }
        sendEmail(paramsData);
    };


    return (
        <Fragment>
            <Toaster richColors={true} />
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
                <Button color="primary" variant="light" type={'submit'} className={'border-2 border-[#7A0BC0]/30 border-solid shadow-lg hover:shadow-glass-sm'}>
                    Cast Your Massage!
                </Button>
            </form>
        </Fragment>
    );
}
