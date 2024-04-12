import {RenderModel} from "@/components/RenderModel";
import {ComputerModel} from "@/components/models/ComputerModel";
import {ProjectsList} from "@/components/projects/Index";
import { Home } from 'lucide-react';
import Link from "next/link";


export default function page() {
    return (
        <main className={'w-full h-full'}>
            <div className={'w-full h-screen relative'}>
                <RenderModel>
                    <ComputerModel/>
                </RenderModel>
                <div className={'fixed top-5 left-2'}>
                    <Link href={'/'} className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                        <Home className={'w-[20px] h-[20px]'} strokeWidth={1.5}/>
                    </Link>
                </div>
            </div>
            <ProjectsList/>
        </main>
    )
}
