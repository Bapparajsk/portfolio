"use client"

import useScreenSize from "@/hooks/useScreenSize";

export const ResponsiveComponent = ({children}) => {
    const size = useScreenSize();
    return <>{children({ size })}</>
}
