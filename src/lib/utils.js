import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const getLanguageColor = (lang) => {
    const colors = {
        JavaScript: '#FEDE33',
        Python: '#4681B1',
        Java: '#ffffff',
        C: '#555555',
        Cpp: '#f34b7d',
        Ruby: '#701516',
        PHP: '#4F5D95',
        TypeScript: '#2968C9',
        Go: '#00ADD8',
        Swift: '#ffac45',
        Kotlin: '#F18E33',
        Rust: '#dea584',
        Dart: '#00B4AB',
        HTML: '#e34c26',
        CSS: '#563d7c',
        Shell: '#89e051',
        'C#': '#178600',
        mdx: "#f7f7f7",
    };

    return colors[lang] || '#000000'; // Default to black if language not found
}