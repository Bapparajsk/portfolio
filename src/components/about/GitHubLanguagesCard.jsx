'use client';

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Contributions } from "./github/Contributions";
import { Languages } from "./github/Languages";
import { motion } from 'framer-motion';


export default function GitHubLanguages() {
    return (
        <div className="w-full h-full flex flex-col gap-2 max-w-[1300px]">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-center mb-10 text-heading-1"
            >
                🚀 Github Status
            </motion.h2>
            <div className="w-full h-fit ">
                <Contributions />
            </div>
            <div
                className="w-full gap-4 mt-4 grid grid-cols-1 md:grid-cols-5 md:grid-rows-2"
            >
                <div className="w-full md:col-span-2 md:row-span-2">
                    <Languages />
                </div>

                <div className="w-full h-full bg-inherit md:col-start-3 md:col-span-3 md:row-span-2">
                    <Card className="w-full h-full bg-[#151B23]">
                        <CardHeader>
                            <h3 className="text-md md:text-xl lg:text-2xl font-semibold text-white text-heading-3">GitHub Stats</h3>
                        </CardHeader>
                        <CardBody>
                            <img
                                src="https://github-readme-stats.vercel.app/api?username=Bapparajsk&show_icons=true&hide_title=true&hide_border=true&bg_color=151B23&title_color=ffffff&text_color=cccccc&icon_color=646cff"
                                width={200}
                                height={200}
                                className="w-full h-full"
                            />
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div >
    );
}
