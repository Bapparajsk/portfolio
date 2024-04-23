'use client'

import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import {Button} from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'


export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [emailValid, setEmailValid] = useState(false);

    const sendEmail = (e) => {
        const toastId = toast.loading("Sending your massage, please wait...")

        emailjs
            .send(
                process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
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
                    toast.error(error.message, {
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
        <>
            <Toaster richColors={true}/>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='max-w-md w-full flex flex-col items-center justify-center space-y-4'
            >
                <input
                    type="text"
                    placeholder="name"
                    {...register("name", {required: "this field is required!",
                        minLength: {
                            value: 3,
                            message: 'Name must be at least 3 characters long.',
                        }
                    })}
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#7A0BC0]/50 custom-bg'}
                />
                {
                    errors.name && <span className={'inline-block self-start text-[#FF204E] text-[15px]'}>{errors.name.message}</span>
                }
                <input
                    type="email"
                    placeholder="email"
                    {...register("email", {required: "this field is required!"})}
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#7A0BC0]/50 custom-bg'}
                />
                {
                    errors.email && <span className={'inline-block self-start text-[#FF204E] text-[15px]'}>{errors.email.message}</span>
                }
                <textarea
                    placeholder="massage"
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
                    className={'w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-[#7A0BC0]/50 custom-bg'}
                />
                {
                    errors.massage && <span className={'inline-block self-start text-[#FF204E] text-[15px]'}>{errors.massage.message}</span>
                }
                <Button color="primary" variant="light" type={'submit'} className={'border-2 border-[#7A0BC0]/30 border-solid shadow-lg hover:shadow-glass-sm'}>
                    Cast Your Massage!
                </Button>
            </form>
        </>
    );
}
