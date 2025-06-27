import { MotionLink } from "@/lib/motion";
import { getIcon } from "@/assets/icons";

export default function HomeButton() {
    return (
        <MotionLink
            className={ "relative text-foreground rounded-full flex items-center justify-center transition-shadow duration-500 nav-button"}
            href={'/'}
            target={"_self"}
            aria-label={"home"}
            nama={"home"}
            whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "spring" } }}
            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring" }}
        >
            <div className="absolute top-0 left-0 w-full h-full bg-[#1c2a42] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2 shadow-[0_0_100px_50px_rgba(0,0,0,0.25)]" />
            <div
                style={{ animationDirection: "reverse" }}
                className="absolute top-0 left-0 w-full h-full bg-[#1c2a42a0] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-[#1c2a4261] rounded-[22%_78%_59%_41%/55%_27%_73%_45%] animate-spin2" />
            <span
                className={ "relative w-14 h-14 p-4 group-hover:pause hover:text-accent " }
            >
                {getIcon({ name: "home", className: "text-gray-400" })}
            </span>
        </MotionLink>
    );
}
