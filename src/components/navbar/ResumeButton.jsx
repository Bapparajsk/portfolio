import MagneticContainer from '../ui/MagneticButton'
import { Button } from '@heroui/button'
import { addToast } from '@heroui/toast'
import { ResponsiveComponent } from '../ResponsiveComponent';


export const ResumeButton = () => {

    const onClickHandler = () => {

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
        <ResponsiveComponent>
            {({ size }) => (
                <MagneticContainer isMagnetic={size > 640}>
                    <Button
                        variant='bordered'
                        className='button-full-round cursor-none'
                        radius='full'
                        isIconOnly={true}
                        onPress={onClickHandler}
                        size={size && size > 640 ? "md" : "sm"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none" stroke="currentColor"
                            strokeWidth={1.5} strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-4 sm:size-5 "
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17h6" />
                            <path d="M9 13h6" />
                        </svg>
                    </Button>

                </MagneticContainer>
            )}
        </ResponsiveComponent>
    )
}