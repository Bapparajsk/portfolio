import Link from "next/link";
import { Home, User, Palette, Phone, Github, Linkedin, NotebookText, Twitter } from 'lucide-react';

const getIcon = (icon) => {
    switch (icon) {
        case 'home':
            return <Home className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'info':
            return <User className={'w-full h-auto'} strokeWidth={1.5}/>
        case 'Projects':
            return <Palette  className={'w-full h-auto'} strokeWidth={1.5}/>
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

export const NavButton = ({ x, y, label, link, icon, newTab }) => {
    return (
        <div
            className={'absolute cursor-pointer z-50'}
            style={{transform: `translate(${x}, ${y})`}}
        >
            <Link className={'text-foreground  rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px] shadow-glass-inset transition-shadow duration-500 hover:shadow-glass-sm '}
                  href={link}
                  target={newTab ? '_blank' : '_self'}
                  aria-label={label}
                  nama={label}
            >
                <span className={'relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'}>
                    {getIcon(icon)}

                    <span className={'peer bg-transparent absolute top-0 w-full h-full'}/>

                    <span className={'absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap'}>
                        {label}
                    </span>
                </span>
            </Link>
        </div>
    )
}
