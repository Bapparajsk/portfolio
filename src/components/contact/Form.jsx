'use client'

import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Input, Textarea } from "@nextui-org/react";
import { Toaster, toast } from 'sonner';
import { Resend } from 'resend';

export default function Form() {
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        const toastId = toast.loading("Sending your massage, please wait...");

        const api_key = process.env.RESEND_API_KEY
        const email_from = process.env.EMAIL_FROM;
        const myEmail = process.env.MY_EMAIL;

        if (!api_key || !email_from || !myEmail) {
            toast.error("Failed to send your massage, please try again!");
            return;
        }

        try {
            const resend = new Resend(api_key);
            const { data, error } = await resend.emails.send({
                from: `portfolio <${email_from}>`,
                to: [myEmail],
                subject: 'New Massage from Portfolio',
                text: `From: ${e.from_name} \nEmail: ${e.reply_to} \nMessage: ${e.message}`,
            });

            if (error) {
                toast.error("Failed to send your massage, please try again!");
                return;
            }
            toast.success("Your massage has been sent successfully!");

        } catch (e) {
            toast.error("Failed to send your massage, please try again!");
        }
    };

    const onSubmit = data => {
        const paramsData = {
            to_name: "bapparaj",
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        }
        setIsSending(true);
        sendEmail(paramsData);
        setIsSending(false);

        setValue("name", "");
        setValue("email", "");
        setValue("massage", "");
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
