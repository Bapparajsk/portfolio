import React from 'react';
import ItemLayout from "@/components/about/ItemLayout";


const AboutDetails = () => {

    return (
        <section className={'py-20 w-full'}>
            <div className={'grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full'}>

                <ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
                    <h2 className={'text-xl md:text-2xl text-left w-full capitalize'}>
                        Architect of Enchantment
                    </h2>
                    <p className={'font-light text-xs sm:text-sm md:text-base'}>
                        My journey in web development is powered by an array of mystical
                        tools and languages, with JavaScript casting the core of my
                        enchantments. I wield frameworks like React.js and Next.js with
                        precision, crafting seamless portals (websites) that connect realms
                        (users) across the digital universe. The ancient arts of the
                        Jamstack empower me to create fast, secure, and dynamic experiences,
                        while my design skills ensure every creation is not only functional
                        but visually captivating. Join me as I continue to explore new
                        spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>
                <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-[#7A0BC0]">
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl '}>
                        10+ <sub className={'font-semibold text-base'}>Project</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className="col-span-full xs:col-span-6 lg:col-span-4 text-[#7A0BC0]">
                    <p className={'font-semibold text-left w-full text-2xl sm:text-5xl'}>
                        2+ <sub className={'font-semibold text-base'}>years of experience</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className="col-span-full sm:col-span-6 md:col-span-4 !p-0">
                    <img
                        className={'w-full h-auto'}
                        src={`https://github-readme-stats.vercel.app/api/top-langs/?username=bapparajsk&theme=transparent&hide_border=true&title_color=7A0BC0&text_color=FFFFFF&icon_color=7A0BC0&text_bold=false`}
                        alt={'bapparaj'}
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-8 !p-0">
                    <img
                        className={'w-full h-auto'}
                        src={`https://github-readme-stats.vercel.app/api?username=bapparajsk&theme=transparent&hide_border=true&title_color=7A0BC0&text_color=FFFFFF&icon_color=7A0BC0&text_bold=false`}
                        alt={'bapparaj'}
                        loading="lazy"
                    />
                </ItemLayout>
                <ItemLayout className="col-span-full">
                    <img
                        className={'w-full h-auto'}
                        src={'https://skillicons.dev/icons?i=java,js,express,nodejs,npm,linux,html,idea,c,cpp,css,docker,git,github,graphql,linkedin,mongodb,postman,py,react,nextjs,redis,sass,tailwind,threejs,ts,vscode,webpack,webstorm'}
                        alt={'bapparaj'}
                        loading="lazy"
                    />
                </ItemLayout>

                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img
                        className={'w-full h-auto'}
                        src="https://github-readme-streak-stats.herokuapp.com?user=bapparajsk&theme=dark&hide_border=true&background=EB545400&ring=7A0BC0&currStreakLabel=7A0BC0"
                        alt="GitHub Streak"/>
                </ItemLayout>
                <ItemLayout className="col-span-full md:col-span-6 !p-0">
                    <img
                        className={'w-full h-auto'}
                        src={'https://github-readme-stats.vercel.app/api/pin/?username=bapparajsk&repo=codeking&description_lines_count=2&theme=transparent&hide_border=true&title_color=7A0BC0&text_color=FFFFFF&icon_color=7A0BC0&text_bold=false'}
                        alt={'bapparaj'}
                        loading="lazy"
                    />
                </ItemLayout>

            </div>
        </section>
    );
};


export default AboutDetails;
