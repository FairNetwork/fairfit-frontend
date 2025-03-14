import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

export const useScrollToTop = (id: string) => {
    const { pathname } = useLocation();

    useEffect(() => {
        document.getElementById(id)?.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
};
