'use client'

import React, {useEffect, useState, useRef} from "react";
import { useInView } from "framer-motion";

export const Paragraph = ({ paraGraph, delay }) => {

    const ref = useRef();
    const isInView = useInView(ref);

    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return show ? (
       <span
           // ref={ref}
       >
           <span
               // style={{
               //     opacity: isInView ? 1 : 0,
               //     transition: "all 0.5s linear 0.5s",
               //     zIndex: '10'
               // }}
           >{paraGraph} </span>
       </span>
    ): null;
}
