import {MainModel} from "@/components/models/MainAvatarModels";
import {RenderModel} from "@/components/RenderModel";
import {Navigation} from "@/components/navigation/Index";

export default function Home() {
    return (
        <main className={'flex h-screen flex-col items-center justify-center relative'}>
            <div className={'w-full h-screen'}>
                <Navigation/>
                <RenderModel>
                    <MainModel/>
                </RenderModel>
            </div>
        </main>
    );
}
