"use client";

import MagneticContainer from '@/components/ui/MagneticButton';
import { Button } from '@heroui/button';
import { useTheme } from 'next-themes';

export const ThemeButton = ({sensitivity = 4}) => {

    const { theme, setTheme } = useTheme();

    return (
        <MagneticContainer sensitivity={sensitivity}>
            <Button radius="full" isIconOnly variant="bordered" onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="button-full-round cursor-none">
                {theme === "light" ? <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="size-5"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg> :
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="size-5"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14.828 14.828a4 4 0 1 0 -5.656 -5.656a4 4 0 0 0 5.656 5.656z" />
                        <path d="M6.343 17.657l-1.414 1.414" />
                        <path d="M6.343 6.343l-1.414 -1.414" />
                        <path d="M17.657 6.343l1.414 -1.414" />
                        <path d="M17.657 17.657l1.414 1.414" />
                        <path d="M4 12h-2" />
                        <path d="M12 4v-2" />
                        <path d="M20 12h2" />
                        <path d="M12 20v2" />
                    </svg>
                }
            </Button>
        </MagneticContainer>
    );
}