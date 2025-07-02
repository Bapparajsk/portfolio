import { MainModel } from "@/components/models/MainAvatarModels";
import { RenderModel } from "@/components/RenderModel";
import { Navigation } from "@/components/navigation/Index";
import { FireFliesBackground } from "@/components/FireFliesBackground";
import { ThemeButton } from "@/components/navbar/ThemeButton";
import { CursorButton } from "@/components/navbar/CursorButton";

export default function Home() {
    return (
        <>
            <main className={'flex h-screen flex-col items-center justify-center relative bg-transparent z-30'}>
                <div className={'w-full h-screen'}>
                    <Navigation />
                    <RenderModel isMainModel={true}>
                        <MainModel />
                    </RenderModel>
                </div>
                <div
                    className="absolute top-10 right-10 border border-[#173043] flex items-center justify-center gap-2 p-2 rounded-full bg-[#ffffff] dark:bg-[#151B23]"
                >
                    <ThemeButton sensitivity={10}/>
                    <CursorButton sensitivity={10} />
                </div>
            </main>
            <FireFliesBackground />
        </>
    );
}
