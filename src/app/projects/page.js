import { IconHome } from '@tabler/icons-react';

import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsList } from "@/components/projects/Index";
import { MotionLink } from "@/lib/motion";

export default function page() {
    return (
        <main>
            <div className={'fixed top-2 left-2 z-[100]'}>
                <MotionLink
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.2 }}
                    href={'/'}
                    className={'w-[50px] h-[50px] flex justify-center items-center border-solid border-amber-50 border-2 rounded-[50%] shadow-glass-inset hover:shadow-glass-sm'}>
                    <IconHome className={'w-[20px] h-[20px]'} strokeWidth={1.5} />
                </MotionLink>
            </div>
            <HeroParallax />
            <ProjectsList />
            <footer className="mt-40">
                <div className={`flex items-center justify-center h-[35rem] md:h-[200px]  w-full`}>
                    <FloatingDock
                        pathName={"projects"}
                    />
                </div>
            </footer>
        </main>
    );
}
