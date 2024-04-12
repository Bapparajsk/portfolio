import {Button} from "@nextui-org/react";

export const ListButton = ({ name }) => {
    return (
        <Button color="primary" variant="bordered" className={'mr-2'}>
            <span>#{name}</span>
        </Button>
    )
}
