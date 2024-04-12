'use client'

import {ButtonList} from "@/app/data";
import {NavButton} from "@/components/navigation/NavButton";

export const Navigation = () => {

    const angleIncrement = 360 / ButtonList.length;

    return (
        <div className={'w-full fixed h-screen flex items-center justify-center'}>
            <div className={'w-max hax flex items-center justify-center relative hover:pause animate-spin-slow group'}>
                {
                    ButtonList.map((item, index) => {
                        const angleRed = (index*angleIncrement*Math.PI) / 180;
                        const radius = 'calc(20vw - 1rem)';
                        const x = `calc(${radius}*${Math.cos(angleRed)})`;
                        const y = `calc(${radius}*${Math.sin(angleRed)})`;

                        return <NavButton key={item.label} x={x} y={y}  {...item}/>
                    })
                }
            </div>
        </div>
    )
}
