import { useRef } from "react";
import { skills } from "@/app/data"
import { getIcon } from "@/assets/icons";
import { SkillCard } from "./SkillCard";
import { Tooltip } from "@heroui/tooltip";
import { MotionDiv, useInView } from "@/lib/motion";

export const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="w-full h-full pl-1 flex gap-8 md:gap-4 flex-col md:flex-row">
            {['language', 'framework'].map((type, i) => (
                <div key={type} className="w-full md:w-1/2 flex flex-col gap-3 text-start">
                    <strong className="text-xl flex items-center gap-2">
                        {getIcon({
                            name: type === 'language' ? 'code' : 'tool',
                            className: `size-6 ${type === 'language' ? 'text-purple-500' : 'text-yellow-500'}`,
                        })}
                        {type === 'language' ? 'Languages' : 'Frameworks'}
                    </strong>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-2">
                        {skills[type].map((item, idx) => (
                            <Tooltip key={idx} content={item} placement="top" color="default">
                                <MotionDiv
                                    ref={ref}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1, transition: {
                                        duration: 0.3,
                                        type: "spring",
                                        delay: idx * 0.1,
                                        bounce: 0.3,
                                    } } : {}}
                                    whileHover={{ scale: 1.1, transition: { duration: 0.1, type: "spring", delay: 0 } }}
                                    whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                                >
                                    <SkillCard name={item} />
                                </MotionDiv>
                            </Tooltip>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}