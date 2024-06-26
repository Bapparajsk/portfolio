import Link from "next/link";
import {Home, User, Palette, Phone, Github, Linkedin, NotebookText, Twitter} from 'lucide-react';
import {ResponsiveComponent} from "@/components/ResponsiveComponent";
import clsx from "clsx";
import {motion} from "framer-motion";

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'info':
            return <User className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'Projects':
            return <Palette className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'contact':
            return <Phone className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'github':
            return <Github className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'linkedin':
            return <Linkedin className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'resume':
            return <NotebookText className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'twitter':
            return <Twitter className={'w-full h-auto'} strokeWidth={1.5}/>
        default:
            return <Home className={'w-full h-auto'} strokeWidth={1.5}/>
    }
}

const item = {
    hidden: {scale: 0},
    show: {scale: 1},
}

const NavLink = motion(Link);

export const NavButton = ({x, y, label, link, icon, newTab, labelDirection = "right"}) => {
    return (
        <ResponsiveComponent>
            {({size}) => {
                return size && size >= 480 ? (
                    <div
                        className={'absolute cursor-pointer z-50'}
                        style={{transform: `translate(${x}, ${y})`}}
                    >
                        <NavLink
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

                    <span className={'peer bg-transparent absolute top-0 w-full h-full'}/>

                    <span
                        className={'absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap'}>
                        {label}
                    </span>
                </span>
                        </NavLink>
                    </div>
                ) : (
                    <div className={'w-fit cursor-pointer z-50'} >
                        <NavLink
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

                    <span className={'peer bg-transparent absolute top-0 w-full h-full'}/>

                    <span
                        className={clsx('absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto' : '')}>
                        {label}
                    </span>
                </span>
                        </NavLink>
                    </div>
                )
            }}
        </ResponsiveComponent>
    )
}


