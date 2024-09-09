import { IconBoxAlignTopRight, IconBrandGithub, IconDeviceImac, IconFile, IconFlask, IconGitMerge, IconSearch } from "@tabler/icons-react";

export const IconsManu = () => {

    const className = "cursor-pointer hover:text-default-400 duration-500";

    const icons = [
        <IconFile size={30} className={className}/>,
        <IconSearch size={30} className={className}/>,
        <IconGitMerge size={30} className={className}/>,
        <IconBoxAlignTopRight size={30} className={className}/>,
        <IconDeviceImac size={30} className={className}/>,
        <IconFlask size={30} className={className}/>,
        <IconBrandGithub size={30} className={className}/>,
    ]

    return (
        <div className="flex flex-col flex-wrap justify-center gap-y-6">
            {icons.map((Icon, index) => (
                <div key={index}>
                    {Icon}
                </div>
            ))}
        </div>
    )
};