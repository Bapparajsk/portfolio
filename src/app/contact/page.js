import { FloatingDock } from "@/components/ui/floating-dock";
import LocomotiveProviders from "../locomotiveProviders";
import HomeButton from "@/components/ui/homeButton";
import { ContactCard } from "@/components/contact";

export const metadata = {
    title: "Bapparaj | Contact",
    description: "I am a Software Engineer",
};

export default function page() {
    return (
        <LocomotiveProviders>
            <main
                className={
                    "w-full h-full overflow-x-hidden  px-8 xs:px-16 lg:px-32 flex flex-col items-center justify-center"
                }
            >
                <div className={"fixed top-2 left-2 z-[100]"}>
                    <HomeButton />
                </div>
                <ContactCard />
                {/* <footer>
                    <div
                        className={`flex items-center justify-center h-[35rem] md:h-[200px] w-full`}
                    >
                        <FloatingDock
                            pathName={"contact"}
                        // isDark={false}
                        />
                    </div>
                </footer> */}
            </main>
        </LocomotiveProviders>
    );
}
