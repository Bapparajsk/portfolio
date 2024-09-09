import { IconBoxAlignTopRight, IconBrandGithub, IconDeviceImac, IconFile, IconFlask, IconGitMerge, IconSearch } from "@tabler/icons-react";

export const IconsManu = () => {

    const icons = [
        <IconFile size={30} className={"cursor-pointer"}/>,
        <IconSearch size={30} className={"cursor-pointer"}/>,
        <IconGitMerge size={30} className={"cursor-pointer"}/>,
        <IconBoxAlignTopRight size={30} className={"cursor-pointer"}/>,
        <IconDeviceImac size={30} className={"cursor-pointer"}/>,
        <IconFlask size={30} className={"cursor-pointer"}/>,
        <IconBrandGithub size={30} className={"cursor-pointer"}/>,
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