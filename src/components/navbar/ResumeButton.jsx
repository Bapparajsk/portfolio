import React from 'react'
import MagneticContainer from '../ui/MagneticButton'
import { Button } from '@heroui/button'
import { addToast } from '@heroui/toast'

export const ResumeButton = () => {

    const onClickHandler = () => {
        console.log("Resume Button Clicked");
        
        const link = document.createElement('a');
        link.href = "/bapparaj-resume.pdf";
        link.download = 'bapparaj-resume.pdf';
        link.click();
        addToast({
            title: 'Resume Downloaded',
            description: 'Resume is being downloaded.',
            type: 'success',
            color: "success",
            duration: 3000,
        });
    }
 
    return (
        <MagneticContainer>
            <Button
                variant='bordered'
                className='button-full-round cursor-none'
                radius='full'
                isIconOnly={true}
                onPress={onClickHandler}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="size-5"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 17h6" /><path d="M9 13h6" /></svg>
            </Button>
        </MagneticContainer>
    )
}