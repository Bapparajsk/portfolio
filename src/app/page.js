"use client";
import { Fragment } from "react";
import { MainModel } from "@/components/models/MainAvatarModels";
import { RenderModel } from "@/components/RenderModel";
import { Navigation } from "@/components/navigation/Index";
import { FireFliesBackground } from "@/components/FireFliesBackground";

export default function Home() {
    return (
        <Fragment>
            <main className={'flex h-screen flex-col items-center justify-center relative bg-transparent z-30'}>
                <div className={'w-full h-screen'}>
                    <Navigation />
                    <RenderModel>
                        <MainModel />
                    </RenderModel>
                </div>
            </main>
            <FireFliesBackground />
        </Fragment>
    );
}
