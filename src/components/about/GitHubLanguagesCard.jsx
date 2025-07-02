'use client';

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Contributions } from "./github/Contributions";
import { Languages } from "./github/Languages";
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';


export default function GitHubLanguages() {

    const { theme } = useTheme();

    const isDark = theme === 'dark';

    const imageUrl = `https://github-readme-stats.vercel.app/api?username=Bapparajsk&show_icons=true&hide_title=true&hide_border=true${isDark
            ? '&bg_color=151B23&title_color=ffffff&text_color=cccccc&icon_color=646cff'
            : '&bg_color=f1efe7&title_color=151B23&text_color=333333&icon_color=4a4a4a'
        }`;

    return (
        <div className="w-full h-full flex flex-col gap-2 max-w-[1300px]">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-5xl font-bold text-center mb-10 text-heading-1 text-neutral-700 dark:text-neutral-200"
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
                    <Card className="w-full h-full bg-[#f1efe7] dark:bg-[#151B23] border border-[#173043]">
                        <CardHeader>
                            <h3 className="text-md md:text-xl lg:text-2xl font-semibold text-neutral-700 dark:text-neutral-200 text-heading-3">GitHub Stats</h3>
                        </CardHeader>
                        <CardBody>
                            <img
                                src={imageUrl}
                                alt="GitHub Stats"
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
