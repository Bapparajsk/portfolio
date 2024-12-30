"use client";

import Image from "next/image";
import Link from "next/link";


export default function Card({
    src,
    alt,
    name,
    links
}) {
    return (
        <div
            className="w-auto h-auto rounded-lg group relative overflow-hidden"
        >
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-transparent transition-all border border-transparent duration-300 group-hover:bg-transparent/60 group-hover:border-red-500 z-10 cursor-pointer" />
            <div className="absolute bottom-3 right-5 z-20 translate-y-10 transition-transform duration-300 group-hover:translate-y-0 flex gap-2">
                <p className="font-roboto font-bold">{name || alt}</p>
                {links.map((link, idx) => (
                    <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        className="transition-colors duration-250 text-gray-200 hover:text-blue-500"
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
