import {LocomotiveProviders} from "../locomotiveProviders";
import { ContactCard } from "@/components/contact";
import { getIcon } from "@/assets/icons";

export const metadata = {
    title: "Bapparaj | Contact",
    description: "I am a Software Engineer",
};

export default function page() {
    return (
        <LocomotiveProviders>
            <main
                className={
                    "relative w-full h-full overflow-x-hidden  px-8 xs:px-16 lg:px-32 flex flex-col items-center justify-center"
                }
            >
                <div className="absolute top-0 left-0 w-full h-full bg-contact-bg-light dark:bg-contact-bg z-0" />
                <ContactCard />
                <div className="-translate-y-12">
                    {getIcon({name: "bottomArrow", className: "w-8 h-8 animate-top-arrow-effect"})}
                </div>
            </main>
        </LocomotiveProviders>
    );
}
