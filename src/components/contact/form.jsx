"use client";

import { useForm } from "react-hook-form";
import { addToast, closeAll } from "@heroui/toast";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input, Textarea } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { BorderBeam } from "../ui/border-beam";
import { Image } from "@/lib/next";
import MagneticContainer from "../ui/MagneticButton";

const FormButtonData = [
    {
        icon: "/svg/github.svg",
        alt: "github",
        link: "https://github.com/Bapparajsk",
    },
    {
        icon: "/svg/linkedin.svg",
        alt: "linkedin",
        link: "https://www.linkedin.com/in/bappa-raj-sk-6a0153233/",
    },
    {
        icon: "/svg/gmail.svg",
        alt: "gmail",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=bapparajsk97@gmail.com&su=Collaboration%20Inquiry%20-%20Excited%20to%20Connect!&body=Hello%20there,%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20truly%20impressed%20by%20your%20work!%20I%20would%20love%20to%20discuss%20a%20potential%20collaboration%20or%20project%20opportunity.%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards,%0A%5BYour%20Name%5D"

    }
]

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm()

    const sendEmail = async (e) => {
        addToast({
            title: "Sending...",
            description: "Please wait send your message...",
            color: "",
            icon: <Spinner variant={"gradient"} size="sm" />,
        });
        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(e),
            });

            if (res.status === 429) {
                throw new Error("Your meassage limit has been exceeded, please 1 day later!");
            }

            if (!res.ok) {
                throw new Error("Failed to send your massage, please try again!");
            }
            closeAll();
            addToast({
                title: "Success",
                description: "Your message has been sent successfully!",
                color: "success"
            })
        } catch (e) {
            closeAll();
            addToast({
                title: "Error",
                description: e.message,
                color: "danger"
            })
        }
    };

    const onSubmit = async (comment) => {

        const { name, email, message } = comment;

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
        <div className="relative w-full h-full p-3 overflow-hidden">
            <Card
                isBlurred
                className="bg-default-100/50 max-w-[700px]"
                shadow="sm"
            >
                <CardHeader>
                    <h3 className="text-2xl font-bold text-heading">Contact</h3>
                    <p className="text-sm ml-2 text-gray-500 text-paragraph">
                        to bapparajsk97@gmail.com
                    </p>
                </CardHeader>
                <CardBody>
                    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <Input
                                    className="input"
                                    type="text"
                                    variant="bordered"
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
                                    className="input"
                                    type="email"
                                    variant="bordered"
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
                                    className="input"
                                    label="Message"
                                    minRows={6}
                                    maxRows={6}
                                    variant="bordered"
                                    isRequired={true}
                                    errorMessage={errors.message?.message}
                                    isInvalid={errors.message}
                                    {...register("message", {
                                        required: "This field is required",
                                        minLength: { value: 20, message: "Minimum 10 characters" },
                                    })}
                                />
                            </div>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 px-2">
                                    {FormButtonData.map((item, index) => (
                                        <MagneticContainer key={index}>
                                            <Button
                                                as={"a"}
                                                variant="bordered"
                                                isIconOnly
                                                key={index}
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="button cursor-none"
                                            >
                                                <Image
                                                    src={item.icon}
                                                    width={50}
                                                    height={50}
                                                    alt={item.alt}
                                                    className="size-6"
                                                />
                                            </Button>
                                        </MagneticContainer>
                                    ))}
                                </div>
                                <MagneticContainer>
                                    <Button
                                        type="submit"
                                        variant="shadow"
                                        color="primary"
                                        className="button cursor-none"
                                        isLoading={isSubmitting}
                                    >
                                        Submit
                                    </Button>
                                </MagneticContainer>
                            </div>
                        </div>
                    </form>
                </CardBody>
                <BorderBeam />
            </Card>
        </div>
    );
}
