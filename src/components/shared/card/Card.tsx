import React, { CSSProperties } from 'react';
import { Offer } from '../../../types/offer';
import './card.scss';
import { convertMonth } from '../../../utils/text';
import Accordion from '../accordion/Accordion';

interface CardProps extends Offer {
    onClick?: (id: Offer['id']) => void;
    isSelected?: boolean;
    style?: CSSProperties;
}

const Card = ({
    style,
    title,
    details,
    price,
    isSelected,
    additionalPrices,
    duration,
    color,
    id,
    onClick
}: CardProps) => {
    return (
        <div
            className="card"
            style={{
                ...style,
                backgroundColor: color,
                border: isSelected ? '#52ab98 2px solid' : 'none'
            }}>
            <div
                className="card__head"
                onClick={() => typeof onClick === 'function' && onClick(id)}>
                <div className="card__head__title">{title}</div>
                <div className="card__head__price">{price}€</div>
                <div className="card__head__duration">{convertMonth(duration)}</div>
                <div className="card__head__duration">
                    {additionalPrices?.startUp}
                    {additionalPrices?.trainer}
                </div>
            </div>
            <Accordion id={1} title="Details">
                <div className="card__details">{details}</div>
            </Accordion>
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
