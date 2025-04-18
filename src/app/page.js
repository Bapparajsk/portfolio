import { MainModel } from "@/components/models/MainAvatarModels";
import { RenderModel } from "@/components/RenderModel";
import { Navigation } from "@/components/navigation/Index";
import { FireFliesBackground } from "@/components/FireFliesBackground";

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
            </main>
            <FireFliesBackground />
        </>
    );
}
