import { cn } from "../../lib/utils";

export const ImponentText = ({ words, className }) => {
    return (
        <span className={cn("text-blue-500 font-bold text-[18px] tracking-wide", className)}>{words}</span>
    )
}
