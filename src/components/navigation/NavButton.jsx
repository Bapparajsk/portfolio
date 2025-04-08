import { ResponsiveComponent } from "@/components/ResponsiveComponent";
import { cn } from "@/lib/utils";
import { MotionDiv } from "@/lib/motion";
import { getIcon } from "@/assets/icons";
import { addToast } from "@heroui/toast";
import { useRouter } from "@/lib/next";

const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
}

export const NavButton = ({ x, y, label, link, icon, labelDirection = "right" }) => {

    const router = useRouter();

    const handleClick = () => {
        if(!link) return;

        if(label === "Resume") {
            addToast({
                title: 'Resume',
                description: 'Download link is not available yet.',
                type: 'info',
                duration: 2000,
            });
            return;
        }

        if (link.startsWith('http')) {
            window.open(link, '_blank');
        } else {
            router.push(link);
        }
    };

    return (
        <ResponsiveComponent>
            {({ size }) => {
                return size && size >= 480 ? (
                    <div
                        className={'absolute cursor-pointer z-50'}
                        style={{ transform: `translate(${x}, ${y})` }}
                    >
                        <MotionDiv
                            variants={item}
                            className={'relative text-foreground rounded-full flex items-center justify-center transition-shadow duration-500'}
                            onClick={handleClick}
                            aria-label={label}
                            nama={label}
                            whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "spring" } }}
                            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a42] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2 shadow-[0_0_100px_50px_rgba(0,0,0,0.25)]" />
                            <div
                                style={{ animationDirection: 'reverse' }}
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a42a0] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2" />
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a4261] rounded-[22%_78%_59%_41%/55%_27%_73%_45%] animate-spin2" />
                            <span
                                className={'relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent'}>
                                {getIcon({name: icon})}

                                <span className={'peer bg-transparent absolute top-0 w-full h-full'} />

                                <span
                                    className={'absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-gradient-to-bl from-[#1b2a42] to-[#181e2a] text-foreground text-sm rounded-md  whitespace-nowrap'}>
                                    {label}
                                </span>
                            </span>
                        </MotionDiv>
                    </div>
                ) : (
                    <div className={'w-fit cursor-pointer z-50'} >
                        <MotionDiv
                            variants={item}
                            className={'relative text-foreground rounded-full flex items-center justify-center transition-shadow duration-500'}
                            onClick={handleClick}
                            aria-label={label}
                            nama={label}
                            whileHover={{ scale: 1.2, transition: { duration: 0.3, type: "spring" } }}
                            whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                        >
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a42] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2 shadow-[0_0_100px_50px_rgba(0,0,0,0.25)]" />
                            <div
                                style={{ animationDirection: 'reverse' }}
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a42a0] rounded-[50%_50%_48%_52%/39%_36%_64%_61%] animate-spin2" />
                            <div
                                className="absolute top-0 left-0 w-full h-full bg-[#1c2a4261] rounded-[22%_78%_59%_41%/55%_27%_73%_45%] animate-spin2" />
                            <span
                                className={'relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4'}>
                                {getIcon({name: icon, className: "w-full h-full"})}

                                <span className={'peer bg-transparent absolute top-0 w-full h-full'} />

                                <span
                                    className={cn('absolute hidden peer-hover:block shadow-glass-inset-label px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md  whitespace-nowrap', labelDirection === 'left' ? 'right-full left-auto' : '')}>
                                    {label}
                                </span>
                            </span>
                        </MotionDiv>
                    </div>
                )
            }}
        </ResponsiveComponent>
    )
}


