import { useCallback } from 'react';

export const useScrollToElement = () => {
    return useCallback((id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            console.warn(`Element with id "${id}" not found.`);
        }
    }, []);
};
