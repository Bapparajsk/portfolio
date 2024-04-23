'use client'

import { useEffect, useState } from 'react'
import {Button} from "@nextui-org/react";


export const ListButton = ({ name, delay }) => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? (
        <Button color="primary" variant="bordered" className={'mr-3 mb-1 md:mr-5 md:mb-2'}>
            <span>#{name}</span>
        </Button>
    ): null;
}
