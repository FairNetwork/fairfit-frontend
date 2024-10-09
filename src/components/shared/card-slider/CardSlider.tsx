import React, { useMemo } from 'react';
import { Offer } from '../../../types/offer';
import './cardSlider.scss';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { selectCurrentGymId } from '../../../redux/gym/selectors';
import Card from './card/Card';
import Icon from '../icon/Icon';

interface CardSliderProps {
    items?: Offer[];
    onEdit?: (id: Offer['id']) => void;
    onAdd?: VoidFunction;
}

const CardSlider = ({ items, onEdit, onAdd }: CardSliderProps) => {
    const gymInternalId = useAppSelector(selectCurrentGymId);

    const navigate = useNavigate();

    const content = useMemo(() => {
        return items?.map(
            ({ id, details, color, title, price, priceAfterDuration, duration, isOffer }) => {
                return (
                    <Card
                        onClick={() =>
                            typeof onEdit === 'function'
                                ? undefined
                                : navigate(`/${gymInternalId}/offers?id=${id}`)
                        }
                        onEdit={onEdit}
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
    }, [gymInternalId, items, navigate, onEdit]);

    return (
        <div className="card-slider">
            {typeof onAdd === 'function' && (
                <div className="card-slider__add" onClick={onAdd}>
                    <Icon icon="bi bi-plus-lg" onClick={onAdd} size={80} color="white" />
                </div>
            )}
            {content}
        </div>
    );
};

export default CardSlider;
