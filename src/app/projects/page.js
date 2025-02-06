import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsList } from "@/components/projects/Index";
import HomeButton from '@/components/ui/homeButton';
import LocomotiveProviders from "../locomotiveProviders";

export const metadata = {
    title: "Bapparaj | Projects",
    description: "I am a Software Engineer",
};

export default function page() {
    return (
        <LocomotiveProviders>
            <main>
                <div className={'fixed top-2 left-2 z-[100]'}>
                    <HomeButton />
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
        </LocomotiveProviders>
    );
}
