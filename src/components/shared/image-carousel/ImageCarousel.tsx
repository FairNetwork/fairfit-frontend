import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import './imageCarousel.scss';

interface ImageCarouselProps {
    images: {
        id: string;
        url: string;
    }[];
}

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = useCallback(
        (newDirection: number) => {
            setPage([page + newDirection, newDirection]);
        },
        [page]
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [paginate]);

    return (
        <div className="image-carousel">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex].url}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                />
            </AnimatePresence>
        </div>
    );
};

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
