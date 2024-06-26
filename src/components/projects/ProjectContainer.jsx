'use client'

import {ListButton} from "@/components/projects/ListButton";
import Link from "next/link";
import React, {useEffect, useState, useRef} from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import {Paragraph} from "@/components/projects/Paragraph";
import {Button} from "@nextui-org/react";
import { ExternalLink } from 'lucide-react'
import useScreenSize from "@/hooks/useScreenSize";

export const ProjectContainer = ({ isRight, image, hading, subTitle, paraGraph, buttonList, link, color, top, sm_top, xs_top, idx }) => {

    const ref = useRef();
    const isInView = useInView(ref);
    const [mouseHover, setMouseHover] = useState(false);
    const [renderedButtons, setRenderedButtons] = useState([]);
    const [words, setWords] = useState([]);

    const size = useScreenSize();

    const isMedium = size > 768;
    const isSmall = size <= 480


    useEffect(() => {

            if (isInView) {
                const wordArray = paraGraph.split(' ');
                const timerButton = setTimeout(() => {
                    setRenderedButtons(buttonList);
                }, 50 * wordArray.length); // 1 second delay for rendering

                const timerWord = setTimeout(() => {
                    setWords(wordArray);
                }, 2100);

                return () => {
                    clearTimeout(timerButton);
                    clearTimeout(timerWord);
                };
            }else {
                setRenderedButtons([]);
                setWords([]);
            }

    }, [isInView]);

    return (
        <div
            className={`w-full h-[800px] md:h-[500px] flex ${isMedium ? '' : 'flex-col'} xs:mb-20 sm:mb-14 md:mb-8 items-center justify-between px-4 sm:px-8 md:px-10 relative ${isRight ? 'flex-row-reverse' : ''}`}
            ref={ref}
        >
            <div className={`w-[90%] md:w-[45%] xs:mb-14 h-full flex items-center justify-center`}
                 style={isMedium ? {
                     transform: isInView ? "none" : `translateX(${isRight ? '200px' : '-200px'})`,
                     opacity: isInView ? 1 : 0,
                     transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                     zIndex: '10'
                 } : {}}
            >
                <div className={`h-auto w-auto mt-8 flex items-center justify-center`}>
                    <Image
                        src={image}
                        alt={hading}
                        width={idx === 0 ? 200 : isMedium ? 400 : isSmall ? 260 : 200}
                        height={isMedium ? 400 : isSmall ? 260 : 200}
                        className={`object-cover z-10 cursor-pointer ${isMedium ? 'hover:scale-[1.1]' : ''}  transition-all image-back-shadow`}
                        onMouseOver={() => setMouseHover(true)}
                        onMouseOut={() => setMouseHover(false)}
                    />
                </div>
                {
                    isMedium ? (
                        <Button
                            as={Link}
                            href={link}
                            target={'_blank'}
                            className={`button-center ${mouseHover ? 'animate-button-animation' : ''}`}
                            variant="shadow"
                            style={{
                                top: mouseHover ? top : '50%',
                                transition: 'all 0.1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
                                animationDelay: mouseHover ? '0.1s' : '',
                                backgroundColor: `#${color}`,
                            }}
                            onMouseOver={() => setMouseHover(true)}
                            onMouseOut={() => setMouseHover(false)}
                        >
                            <span>{hading}</span>
                            <ExternalLink className={'w-full h-auto'} width={18} height={18} strokeWidth={1.5}/>
                        </Button>
                    ) : (
                        <Button
                            as={Link}
                            href={link}
                            target={'_blank'}
                            className={`button-center `}
                            variant="shadow"
                            style={{
                                top: isSmall ? xs_top : sm_top,
                                backgroundColor: `#${color}`,
                            }}
                        >
                            <span>{hading}</span>
                            <ExternalLink className={'w-full h-auto'} width={18} height={18} strokeWidth={1.5}/>
                        </Button>
                    )
                }

            </div>
            <div className={`w-[90%] md:w-[45%] h-full flex flex-col justify-center`}>
                <h3 className={`text-2xl md:text-4xl font-bold font-roboto tracking-[2px] mt-10`}
                    style={{color: `#${color}`}}>{hading}</h3>
                <h4 className={'text-[14px] md:text-[20px] font-roboto tracking-[2px] my-2'}
                    style={{color: `#${color}B8`}}>{subTitle}</h4>
                <div className={'text-amber-50/50 word-spacing font-ubuntu'}>
                    {
                        isInView && isMedium ? paraGraph.split(' ').map((item, index) => {
                            return <Paragraph key={index} paraGraph={item} delay={index * 50}/>
                        }) : (
                            <span className={'text-sm'}>{paraGraph}</span>
                        )
                    }
                </div>
                <ul className={'flex flex-wrap items-center my-3'}>
                    {
                        isInView && isMedium ? renderedButtons.map((item, index) => {
                            return (
                                <ListButton key={index} name={item} delay={index * 200}/>
                            )
                        }) : (
                            buttonList.map((item, index) => {
                                return (
                                    <ListButton key={index} name={item} delay={0}/>
                                )
                            })
                        )
                    }
                </ul>
            </div>
            { isMedium &&
                <>
                    <Link href={link} target={'_blank'} className={'absolute dot-center'}>
                        <div className={'w-[15px] h-[15px] rounded-full bg-black border-solid border-2 duration-500 hover:scale-[1.3] transition-all'}/>
                    </Link>
                    <div
                        className={`absolute h-[1px] ${isRight ? 'left-[50%]' : 'right-[50%]'}  hover:h-[2px] transition-all`}
                        style={{
                        backgroundColor: `#${color}`,
                        width: isInView ? '25%' : '0%',
                        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 1s',
                        }}
                    />
                </>
            }
        </div>
    )
}
