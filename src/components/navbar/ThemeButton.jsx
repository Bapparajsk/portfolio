"use client";

import MagneticContainer from '@/components/ui/MagneticButton';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';
import { ResponsiveComponent } from '../ResponsiveComponent';
import { AnimatePresence, motion } from "framer-motion";

export const ThemeButton = ({ sensitivity = 4 }) => {

    const { theme, setTheme } = useTheme();

    return (
        <ResponsiveComponent>
            {({ size }) => (
                <MagneticContainer sensitivity={sensitivity} isMagnetic={size > 640}>
                    <Button
                        radius="full"
                        isIconOnly
                        size={size && size > 640 ? "md" : "sm"}
                        variant="bordered"
                        onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        className="button-full-round cursor-none"
                    >
                        <AnimatePresence mode="wait">
                            {theme === "light" ? (
                                <motion.svg
                                    key="light"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-4 sm:size-5"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <motion.path
                                        d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                                    />
                                </motion.svg>
                            ) : (
                                <motion.svg
                                    key="dark"
                                    initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="size-4 sm:size-5"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />

                                    {/* Moon core */}
                                    <motion.path
                                        d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
                                    />

                                    {/* Rays */}
                                    {[
                                        "M12 4v-2",
                                        "M17.657 6.343l1.414 -1.414",
                                        "M20 12h2",
                                        "M17.657 17.657l1.414 1.414",
                                        "M12 20v2",
                                        "M6.343 17.657l-1.414 1.414",
                                        "M4 12h-2",
                                        "M6.343 6.343l-1.414 -1.414",
                                    ].map((d, i) => (
                                        <motion.path
                                            key={i}
                                            d={d}
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: 1 }}
                                            transition={{
                                                duration: 0.1,
                                                ease: "easeInOut",
                                                delay: 0.6 + i * 0.1,
                                            }}
                                        />
                                    ))}
                                </motion.svg>
                            )}
                        </AnimatePresence>

                    </Button>
                </MagneticContainer>
            )}

        </ResponsiveComponent>
    );
}