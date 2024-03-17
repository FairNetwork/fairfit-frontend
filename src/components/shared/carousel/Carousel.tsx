import React, { useContext, useState } from 'react';
import { Offer } from '../../../types/offer';
import Card from '../card/Card';
import { useSpringCarousel } from 'react-spring-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.scss';
import { useNavigate } from 'react-router-dom';
import { GymContext } from '../../App';
import { isMobile } from '../../../utils/environment';

interface CarouselProps {
    items: Offer[];
}

const Carousel = ({ items }: CarouselProps) => {
    const { gymId } = useContext(GymContext);

    const navigate = useNavigate();

    const [currentSlide, setCurrentSlide] = useState(`carousel-item__${items[0].id}`);

    const { carouselFragment, useListenToCustomEvent, slideToPrevItem, slideToNextItem } =
        useSpringCarousel({
            itemsPerSlide: 3,
            withLoop: true,
            initialStartingPosition: 'center',
            gutter: 24,
            items: items.map(({ id, details, color, title, price, additionalPrices, duration }) => {
                return {
                    id: `carousel-item__${id}`,
                    renderItem: (
                        <Card
                            onClick={() => navigate(`/${gymId}/offers?id=${id}`)}
                            isSelected={false}
                            key={id}
                            id={id}
                            color={color}
                            title={title}
                            duration={duration}
                            details={details}
                            additionalPrices={additionalPrices}
                            price={price}
                        />
                    )
                };
            })
        });

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id);
        }
    });

    return (
        <div className="carousel">
            <div className="carousel__wrapper">{carouselFragment}</div>
            {!isMobile() && (
                <div className="carousel__buttons">
                    <FontAwesomeIcon icon={faChevronLeft} size={'2x'} onClick={slideToPrevItem} />

                    <FontAwesomeIcon icon={faChevronRight} size={'2x'} onClick={slideToNextItem} />
                </div>
            )}
        </div>
    );
};

export default Carousel;
