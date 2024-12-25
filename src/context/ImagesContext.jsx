"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
    const [images, setImages] = useState([]);

    async function init() {
        return new Promise((resolve, reject) => {
            const maxIdx = 706;
            let count = 0;
            const images = [];
            for (let i = 1; i <= maxIdx; i++) {
                const img = new Image();
                img.src = `/solar/frame_${i}.webp`;
                img.onload = () => {
                    images[i] = img;
                    count++;
                    if (count === maxIdx) {
                        resolve(images);
                    }
                };
                img.onerror = reject; // Handle any image load errors
            }
        });
    }

    const loadImagein = async () => {
        return await init();
    };

    useEffect(() => {
        init()
            .then((loadedImages) => {
                setImages(loadedImages);
            })
            .catch((error) => {
                console.error("Failed to load images:", error);
            });
    }, []);
    return (
        <ImagesContext.Provider value={{ images, loadImagein }}>
            {children}
        </ImagesContext.Provider>
    );
};

export const useImages = () => {
    const context = useContext(ImagesContext);
    if (context === undefined) {
        throw new Error("useImages must be used within an ImagesProvider");
    }
    return context;
};
