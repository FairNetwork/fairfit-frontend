import React, { ReactElement, useMemo } from 'react';
import { Offer } from '../../../types/offer';
import './card.scss';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface CardProps extends Offer {
    onClick?: (id: Offer['id']) => void;
    isSelected?: boolean;
}

const Card = ({ title, details, price, isOffer, isSelected, color, id, onClick }: CardProps) => {
    const content = useMemo(() => {
        const items: ReactElement[] = [];

        details.forEach((detail) => {
            items.push(
                <div className="card__content__wrapper" key={`detail__${detail}`}>
                    <div className="card__content__wrapper__icon">
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    <div className="card__content__wrapper__text">{detail}</div>
                </div>
            );
        });

        return items;
    }, [details]);

    return (
        <div
            className="card"
            onClick={() => typeof onClick === 'function' && onClick(id)}
            style={{
                backgroundColor: color,
                border: isSelected ? '#52ab98 2px solid' : 'none'
            }}>
            <div className="card__head">
                <div className="card__head__title">{title}</div>
                <div className="card__head__type">
                    {isOffer ? 'Angebotstarif' : 'Standardtarif'}
                </div>
                <div className="card__head__price-wrapper">
                    <div className="card__head__price-wrapper__price">{price}€</div>
                    <div className="card__head__price-wrapper__duration">monatlich</div>
                </div>
            </div>
            <div className="card__content">{content}</div>
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
