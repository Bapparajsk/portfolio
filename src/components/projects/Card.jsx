"use client";

import { Image, Link } from "@/components/next";

export default function Card({
    src,
    alt,
    name,
    links,
}) {

    return (
        <div
            className="w-auto h-auto rounded-lg group relative overflow-hidden transition-all border-2 group-hover:border-[#3D81F7] border-transparent duration-300 cursor-pointer"
        >
            <Image
                src={src}
                alt={alt}
                width={500}
                height={500}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full grayscale group-hover:grayscale-0 transition-all duration-300"
                onClick={() => {
                    if(links.at(-1)?.href) window.open(links.at(-1).href, "_blank");
                }}
            />
            {/* <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-transparent transition-all border-2 group-hover:border-[#3D81F7] border-transparent duration-300 cursor-pointer" /> */}
            <div 
                className="absolute w-full h-10 flex items-center justify-end gap-2 px-7 bottom-0 left-0  bg-black/80 translate-y-20 transition-transform duration-300 group-hover:translate-y-0"
            >
                <p className="font-roboto font-bold">{name || alt}</p>
                {links.map((link, idx) => (
                    <Link
                        href={link.href}
                        key={idx}
                        target="_blank"
                        className="transition-colors duration-250 hover:text-blue-500 "
                    >
                        {link.icon}
                    </Link>
                ))}
            </div>
        </div>
    )
}
