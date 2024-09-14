import React, { useMemo } from 'react';
import { Offer } from '../../../types/offer';
import './cardSlider.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';
import Card from './card/Card';

interface CardSliderProps {
    items?: Offer[];
}

const CardSlider = ({ items }: CardSliderProps) => {
    const gymInternalId = useAppSelector(selectCurrentGymId);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return items?.map(
            ({ id, details, color, title, price, priceAfterDuration, duration, isOffer }) => {
                return (
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
                );
            }
        );
    }, [gymInternalId, items, navigate]);

    return <div className="card-slider">{content}</div>;
};

export default CardSlider;
