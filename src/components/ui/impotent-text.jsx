import { cn } from "../../lib/utils";

export const ImpotentText = ({ words, className }) => {
    return (
        <span className={cn("text-blue-500 font-bold text-[18px] text-sm md:text-medium tracking-wide", className)}>{words}</span>
    )
}
