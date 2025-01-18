import { useEffect, useState, useCallback, RefObject } from 'react';

export const useVisibility = (
    containerId: string,
    elementRef: RefObject<HTMLElement | null>,
    threshold: number = 0.5
): boolean => {
    const [isVisible, setIsVisible] = useState(false);

    const checkVisibility = useCallback(() => {
        const container = document.getElementById(containerId);
        if (!container || !elementRef.current) return;

        const containerRect = container.getBoundingClientRect();
        const elementRect = elementRef.current.getBoundingClientRect();

        const intersectionWidth = Math.max(
            0,
            Math.min(containerRect.right, elementRect.right) -
                Math.max(containerRect.left, elementRect.left)
        );
        const intersectionHeight = Math.max(
            0,
            Math.min(containerRect.bottom, elementRect.bottom) -
                Math.max(containerRect.top, elementRect.top)
        );

        const intersectionArea = intersectionWidth * intersectionHeight;
        const elementArea = elementRect.width * elementRect.height;

        setIsVisible(intersectionArea / elementArea > threshold);
    }, [containerId, elementRef, threshold]);

    useEffect(() => {
        const container = document.getElementById(containerId);

        if (!container) return;

        container.addEventListener('scroll', checkVisibility);
        checkVisibility();

        return () => {
            container.removeEventListener('scroll', checkVisibility);
        };
    }, [containerId, checkVisibility]);

    return isVisible;
};
