"use client";

import { useCursor } from '@/context/CursorContext';
import MagneticContainer from '../ui/MagneticButton';
import { Button } from '@heroui/button';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown';
import useScreenSize from '@/hooks/useScreenSize';

export const CursorButton = ({sensitivity = 4}) => {

    const { setNewCursor, getCurrentName, cursors } = useCursor();
    const screenSize = useScreenSize();

    if(screenSize < 640) return null; // Hide on small screens
 
    return (
        <Dropdown open={true}>
            <MagneticContainer sensitivity={sensitivity}>
                <DropdownTrigger>
                    <Button radius="full" variant="bordered" isIconOnly={screenSize < 1024} className="button-full-round cursor-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-6"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7.904 17.563a1.2 1.2 0 0 0 2.228 .308l2.09 -3.093l4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047 -1.047a1.067 1.067 0 0 0 0 -1.509l-4.907 -4.907l3.113 -2.09a1.2 1.2 0 0 0 -.309 -2.228l-13.582 -3.904l3.904 13.563z" /></svg>
                        <span className="font-semibold text-sm hidden lg:block">
                            {getCurrentName()}
                        </span>
                    </Button>
                </DropdownTrigger>
            </MagneticContainer>
            <DropdownMenu aria-label="Static Actions">
                {cursors.map((item, index) => (
                    <DropdownItem key={index} onClick={() => setNewCursor(item)}>
                        <span className="font-semibold text-sm">
                            {getCurrentName(item)}
                        </span>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>

    )
}
