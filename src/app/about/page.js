import { AboutDetails } from "@/components/about/index";
import MainProjects from "@/components/about/MainProjects";
import { LampContainer } from "@/components/ui/lamp";
import { MotionH1 } from "@/lib/motion";
import { LocomotiveProviders } from "../locomotiveProviders";
import TrueFocus from "@/components/ui/TrueFocus";
import LoadingAnimation from "@/components/about/loading";

export const metadata = {
    title: "Bapparaj | About",
    description:
      "Welcome to my portfolio! Powered by Next.js, Three.js, and Tailwind CSS, this site blends creativity with technology. Explore immersive experiences crafted with Three.js, navigate seamlessly with Next.js, and enjoy sleek design with Tailwind CSS. Dive into my projects and discover the fusion of artistry and innovation",
};

export default function page() {

    return (
        <LocomotiveProviders autoStart={false} >
            <main className={"w-full h-full px-2 md:px-0 dark:bg-slate-950 bg-[#F2F7FA]"} >
                <div className="w-full h-full relative">
                    <div
                        data-scroll
                        data-scroll-section
                        data-scroll-speed="-.7"
                        className={"w-full h-auto dd"}
                    >
                        <LampContainer>
                            <MotionH1
                                initial={{ opacity: 0.5, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                }}
                                className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl "
                            >
                                <div className="text-center">
                                    <div className="text-3xl md:text-5xl font-bold text-neutral-700 dark:text-neutral-200 mb-4 flex gap-5">
                                        <span className="text-heading">Hi, I'm a</span>
                                        <TrueFocus
                                            sentence="Software Developer."
                                            manualMode={false}
                                            blurAmount={5}
                                            borderColor="#64D8FA"
                                            animationDuration={0.8}
                                            pauseBetweenAnimations={1}
                                            
                                        />
                                    </div>
                                    <p className="text-paragraph text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-xl mx-auto mt-4 leading-relaxed tracking-wide">
                                        I build scalable apps that solve real-world problems.
                                    </p>
                                </div>
                            </MotionH1>
                        </LampContainer>
                    </div>
                    <div className="w-full h-auto overflow-x-hidden hidden md:block">
                        <AboutDetails />
                    </div>
                    <div className="w-full h-auto bg-[#010409] relative">
                        <MainProjects />
                    </div>
                    <LoadingAnimation />
                </div>
            </main>
        </LocomotiveProviders>
    );
}
