"use client";

import { ButtonList } from "@/app/data";
import { NavButton } from "@/components/navigation/NavButton";
import { ResponsiveComponent } from "@/components/ResponsiveComponent";
import { MotionDiv } from "@/lib/motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    }
}

export const Navigation = () => {

    const angleIncrement = 360 / ButtonList.length;

    return (
        <div className={'w-full fixed h-screen flex items-center justify-center'}>
            <ResponsiveComponent>
                {({ size }) => {
                    return size && size >= 480 ? (
                        <MotionDiv
                            variants={container}
                            initial={'hidden'}
                            animate={'show'}
                            className={'w-max hax flex items-center justify-center relative hover:pause animate-spin-slow group'}>
                            {
                                ButtonList.map((item, index) => {
                                    const angleRed = (index * angleIncrement * Math.PI) / 180;
                                    const radius = (size >= 1024) ? 'calc(20vw - 1rem)' : (size >= 768) ? 'calc(30vw - 1rem)' : 'calc(40vw - 1rem)';
                                    const x = `calc(${radius}*${Math.cos(angleRed)})`;
                                    const y = `calc(${radius}*${Math.sin(angleRed)})`;

                                    return <NavButton key={item.label} x={x} y={y}  {...item} />
                                })
                            }
                        </MotionDiv>
                    ) : (
                        <>
                            <MotionDiv
                                variants={container}
                                initial={'hidden'}
                                animate={'show'}
                                className={'w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-start xs:items-center justify-center relative group'}>
                                {ButtonList.slice(0, ButtonList.length / 2).map((item, index) => <NavButton key={item.label} x={0} y={0}  {...item} />)}
                            </MotionDiv>
                            <MotionDiv
                                variants={container}
                                initial={'hidden'}
                                animate={'show'}
                                className={'w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4 items-end xs:items-center justify-center relative group'}>
                                {ButtonList.slice(ButtonList.length / 2, ButtonList.length).map((item, index) => <NavButton key={item.label} x={0} y={0}  {...item} labelDirection={'left'} />)}
                            </MotionDiv>
                        </>
                    )
                }}
            </ResponsiveComponent>
        </div>
    );
}
