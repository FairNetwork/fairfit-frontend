import { ReactElement, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, wrap } from 'framer-motion';
import './imageCarousel.scss';
import Indicator from './indicator/Indicator';
import { Benefit, BenefitType } from '../../../types/gym';
import { GymContext } from '../../../components1/App';
import { useNavigate } from 'react-router-dom';

interface ImageCarouselProps {
    images: Benefit[];
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
    const { gymInternalId } = useContext(GymContext);

    const [[page, direction], setPage] = useState([0, 0]);

    const navigate = useNavigate();

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

    const indicators = useMemo(() => {
        const items: ReactElement[] = [];

        images.forEach(({ id }) => {
            items.push(
                <Indicator key={`indicator__${id}`} isSelected={id === images[imageIndex].id} />
            );
        });

        return items;
    }, [imageIndex, images]);

    const handleClick = (type: BenefitType) => {
        let path;

        switch (type) {
            case BenefitType.Equipment:
                path = 'geräte';
                break;
            case BenefitType.Courses:
                path = 'kurse';
                break;
            case BenefitType.Otherwise:
                path = 'sonstige_vorteile';
                break;
            default:
                path = undefined;
                break;
        }

        if (!path) {
            return;
        }

        navigate(`/${gymInternalId}/${path}`);
    };

    return (
        <div className="image-carousel">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex].imageUrl}
                    onClick={() => handleClick(images[imageIndex].type)}
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
                <div
                    className="image-carousel__indicators"
                    onClick={() => handleClick(images[imageIndex].type)}>
                    {indicators}
                </div>
            </AnimatePresence>
        </div>
    );
};

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
