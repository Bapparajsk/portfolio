import { HeroParallax } from "@/components/ui/hero-parallax";
import { ProjectsList } from "@/components/projects/Index";
import {LocomotiveProviders} from "../locomotiveProviders";

export const metadata = {
    title: "Bapparaj | Projects",
    description:
      "Welcome to my portfolio! Powered by Next.js, Three.js, and Tailwind CSS, this site blends creativity with technology. Explore immersive experiences crafted with Three.js, navigate seamlessly with Next.js, and enjoy sleek design with Tailwind CSS. Dive into my projects and discover the fusion of artistry and innovation",
};

export default function page() {
    return (
        <LocomotiveProviders>
            <main className="relative w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-project-bg-light dark:bg-project-bg z-0" />
                <HeroParallax />
                <ProjectsList />                
            </main>
        </LocomotiveProviders>
    );
}
