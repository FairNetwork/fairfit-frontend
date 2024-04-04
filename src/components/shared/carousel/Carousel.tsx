import React, { useContext } from 'react';
import { Offer } from '../../../types/offer';
import Card from '../card/Card';
import { useSpringCarousel } from 'react-spring-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './carousel.scss';
import { useNavigate } from 'react-router-dom';
import { GymContext } from '../../App';
import { isMobile } from '../../../utils/environment';
import Icon from '../icon/Icon';

interface CarouselProps {
    items: Offer[];
}

const Carousel = ({ items }: CarouselProps) => {
    const { gymInternalId } = useContext(GymContext);

    const navigate = useNavigate();

    const { carouselFragment, slideToPrevItem, slideToNextItem } = useSpringCarousel({
        itemsPerSlide: 3,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 24,
        items: items.map(
            ({ id, details, color, title, price, priceAfterDuration, duration, isOffer }) => {
                return {
                    id: `carousel-item__${id}`,
                    renderItem: (
                        <Card
                            onClick={() => navigate(`/${gymInternalId}/offers?id=${id}`)}
                            isSelected={false}
                            key={id}
                            id={id}
                            color={color}
                            title={title}
                            details={details}
                            price={price}
                            isOffer={isOffer}
                            priceAfterDuration={priceAfterDuration}
                            duration={duration}
                        />
                    )
                };
            }
        )
    });

    return (
        <div className="carousel">
            <div
                className="carousel__wrapper"
                style={{ width: isMobile() ? 'calc(100% + 16px)' : '100%' }}>
                {carouselFragment}
            </div>
            {!isMobile() && (
                <div className="carousel__buttons">
                    <div className="carousel__buttons__button">
                        <Icon icon="bi-caret-left-fill" size="xxx-large" />
                    </div>
                    <div className="carousel__buttons__button">
                        <Icon icon="bi-caret-right-fill" size="xxx-large" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Carousel;
