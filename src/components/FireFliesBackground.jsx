import { Image } from "@/lib/next";

export const FireFliesBackground = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
            <div className="w-screen h-screen bg-[#1a213a] shadow-[0_0_400px_84px_rgb(0,0,0)_inset]"/>
            <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-auto h-auto z-10 overflow-hidden rounded-md">
                <Image 
                    src={"/themes-image/haunted-horror.webp"}
                    width={1000}
                    height={1000}
                    alt="Horror House"
                    className="object-cover opacity-5"
                />
            </div>
        </div>
    );
}
