import { FloatingDock } from "@/components/ui/floating-dock";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsList } from "@/components/projects/Index";
import HomeButton from '@/components/ui/homeButton';
import LocomotiveProviders from "../locomotiveProviders";

export const metadata = {
    title: "Bapparaj | Projects",
    description:
      "Welcome to my portfolio! Powered by Next.js, Three.js, and Tailwind CSS, this site blends creativity with technology. Explore immersive experiences crafted with Three.js, navigate seamlessly with Next.js, and enjoy sleek design with Tailwind CSS. Dive into my projects and discover the fusion of artistry and innovation",
};

export default function page() {
    return (
        <LocomotiveProviders>
            <main className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-project-bg z-0" />
                <div className={'fixed top-2 left-2 z-[100]'}>
                    <HomeButton />
                </div>
                <HeroParallax />
                <ProjectsList />
                <footer className="mt-40">
                    <div className={`relative flex items-center justify-center h-[35rem] md:h-[200px]  w-full`}>
                        <FloatingDock
                            pathName={"projects"}
                            isDark={false}
                        />
                    </div>
                </footer>
            </main>
        </LocomotiveProviders>
    );
}
