import { useEffect, useRef, useState } from 'react';

/*
 * Custom hook to manage the scroll-reveal effect for an element.
 * @param {number} threshold - Percentage of the element that must be visible to trigger the effect (0.0 to 1.0).
 * @returns {{ref: object, isVisible: boolean}} - The ref to attach to the DOM element and the visibility state.
 */

export const useScrollFadeIn = (threshold = 0.1) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return; 

        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        };

        // Configuration for the Intersection Observer
        const observerOptions = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: threshold, // Use the provided threshold
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        observer.observe(currentRef);

        // Cleanup function
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]); // Re-run if threshold changes

    return { ref, isVisible };
};