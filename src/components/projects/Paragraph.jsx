'use client'

import React, {useEffect, useState, useRef} from "react";

export const Paragraph = ({ paraGraph, delay }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? (
       <span> <span>{paraGraph} </span> </span>
    ): null;
}
