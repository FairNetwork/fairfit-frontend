import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import { Offer } from '../../../types/offer';
import './card.scss';
import { convertMonth } from '../../../utils/text';
import Icon from '../icon/Icon';

interface CardProps extends Offer {
    onClick?: (id: Offer['id']) => void;
    isSelected?: boolean;
}

const Card = ({
    title,
    details,
    price,
    isOffer,
    isSelected,
    color,
    id,
    onClick,
    priceAfterDuration,
    duration
}: CardProps) => {
    const [priceWidth, setPriceWidth] = useState(0);

    const priceRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (priceRef.current) {
            setPriceWidth(priceRef.current.offsetWidth);
        }
    }, []);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        details.forEach((detail) => {
            items.push(
                <div className="card__content__wrapper" key={`detail__${detail}`}>
                    <div className="card__content__wrapper__icon">
                        <Icon icon="bi-check2" />
                    </div>
                    <div className="card__content__wrapper__text">{detail}</div>
                </div>
            );
        });

        return items;
    }, [details]);

    const borderColor = useMemo(() => {
        if (!isSelected) {
            return 'none';
        }

        if (color === '#222838') {
            return '#52ab98 2px solid';
        } else {
            return '#222838 2px solid';
        }
    }, [color, isSelected]);

    return (
        <div
            className="card"
            onClick={() => typeof onClick === 'function' && onClick(id)}
            style={{
                backgroundColor: color,
                border: borderColor
            }}>
            <div className="card__head">
                <div className="card__head__title">{title}</div>
                <div className="card__head__type">
                    {isOffer ? 'Angebotstarif' : 'Standardtarif'}
                </div>
                <div className="card__head__price-wrapper">
                    <div className="card__head__price-wrapper__price" ref={priceRef}>
                        {price} €
                    </div>
                    <div
                        className="card__head__price-wrapper__duration"
                        style={{ left: `calc(50% + ${priceWidth / 2 + 6}px)` }}>
                        {duration && priceAfterDuration
                            ? convertMonth({ priceAfterDuration, duration })
                            : 'monatlich'}
                    </div>
                </div>
            </div>
            <div className="card__content">{content}</div>
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
