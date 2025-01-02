"use client";

import Link from "next/link";
import {
    IconHome, IconUser, IconPalette,
    IconPhone, IconBrandGithub, IconBrandLinkedin,
    IconAlignBoxLeftTop, IconBrandX
} from "@tabler/icons-react";
import { ResponsiveComponent } from "@/components/ResponsiveComponent";
import { cn } from "@/lib/utils";
import { MotionLink } from "@/components/motion";

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <IconHome className={'w-full h-auto'} strokeWidth={1.5} />
        case 'info':
            return <IconUser className={'w-full h-auto'} strokeWidth={1.5} />
        case 'Projects':
            return <IconPalette className={'w-full h-auto'} strokeWidth={1.5} />
        case 'contact':
            return <IconPhone className={'w-full h-auto'} strokeWidth={1.5} />
        case 'github':
            return <IconBrandGithub className={'w-full h-auto'} strokeWidth={1.5} />
        case 'linkedin':
            return <IconBrandLinkedin className={'w-full h-auto'} strokeWidth={1.5} />
        case 'resume':
            return <IconAlignBoxLeftTop className={'w-full h-auto'} strokeWidth={1.5} />
        case 'twitter':
            return <IconBrandX className={'w-full h-auto'} strokeWidth={1.5} />
        default:
            return <IconHome className={'w-full h-auto'} strokeWidth={1.5} />
    }
}

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
}

export const NavButton = ({ x, y, label, link, icon, newTab, labelDirection = "right" }) => {
    return (
        <ResponsiveComponent>
            {({ size }) => {
                return size && size >= 480 ? (
                    <div
                        className={'absolute cursor-pointer z-50'}
                        style={{ transform: `translate(${x}, ${y})` }}
                    >
                        <MotionLink
                            variants={item}
                            className={'text-foreground  rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset transition-shadow duration-500 hover:shadow-glass-sm '}
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            aria-label={label}
                            nama={label}
                        >
                            <span
                                className={'relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'}>
                                {getIcon(icon)}

                                <span className={'peer bg-transparent absolute top-0 w-full h-full'} />

                                <span
                                    className={'absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap'}>
                                    {label}
                                </span>
                            </span>
                        </MotionLink>
                    </div>
                ) : (
                    <div className={'w-fit cursor-pointer z-50'} >
                        <MotionLink
                            variants={item}
                            className={'text-foreground  rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset transition-shadow duration-500 hover:shadow-glass-sm '}
                            href={link}
                            target={newTab ? '_blank' : '_self'}
                            aria-label={label}
                            nama={label}
                        >
                            <span
                                className={'relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 group-hover:pause hover:text-accent'}>
                                {getIcon(icon)}

                                <span className={'peer bg-transparent absolute top-0 w-full h-full'} />

                                <span
                                    className={cn('absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto' : '')}>
                                    {label}
                                </span>
                            </span>
                        </MotionLink>
                    </div>
                )
            }}
        </ResponsiveComponent>
    )
}


