import {codeLingList} from "@/app/data";
import {ListButton} from "@/components/projects/ListButton";
import Link from "next/link";
import React from "react";

export const ProjectContainer = ({ isRight, image, hading, subTitle, paragraph, buttonList, link}) => {
    return (
        <div className={`w-full h-[300px] flex items-center justify-between px-10 relative ${isRight ? 'flex-row-reverse': ''}`}>
            <div className={`w-[50%] h-full flex items-center justify-center`}>

            </div>
            <div className={'w-[45%] h-full flex flex-col justify-center '}>
                <h3 className={'text-4xl font-bold font-roboto tracking-[2px] mt-10'}>CodeKing</h3>
                <h4 className={'text-[20px] font-roboto tracking-[2px] my-2'}>(Problem Solving)</h4>
                <p className={'text-amber-50/50 word-spacing '}>
                    Welcome to CodeKing, where coding challenges await and solutions reign supreme! Dive into a
                    realm of problem-solving prowess, where every line of code brings you closer to mastery. Join us
                    on this epic journey of discovery and triumph. Are you ready to conquer the code?
                </p>
                <ul className={'flex flex-wrap items-center my-3'}>
                    {
                        codeLingList.map((item, index) => {
                            return (
                                <ListButton key={index} name={item}/>
                            )
                        })
                    }
                </ul>
            </div>
            <Link href={'https://codeking.in'} target={'_blank'} className={'absolute dot-center'}>
                <div className={'w-[15px] h-[15px] rounded-full bg-black border-solid border-2 duration-500 hover:scale-[1.3] transition-all'}/>
            </Link>
            <div className={`absolute w-[30%] h-[1px] bg-amber-50 lef ${isRight ? 'left': 'right'}-[50%] hover:h-[2px] transition-all`}/>
        </div>
    )
}
