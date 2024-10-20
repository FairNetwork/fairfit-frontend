import React, { ReactElement, useEffect, useMemo, useRef, useState } from 'react';
import './card.scss';
import { Offer } from '../../../../types/offer';
import { convertMonth } from '../../../../utils/text';
import Icon from '../../icon/Icon';
import { clsx } from 'clsx';

interface CardProps extends Offer {
    onClick?: (id: Offer['id']) => void;
    isSelected?: boolean;
    onEdit?: (id: Offer['id']) => void;
    shouldShowDetails?: boolean;
}

const Card = ({
    title,
    details,
    price,
    isOffer,
    id,
    onEdit,
    onClick,
    priceAfterDuration,
    duration,
    shouldShowDetails = true
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

    const cardClassNames = clsx('card', {
        'card--display': typeof onEdit !== 'function'
    });

    return (
        <div
            className={cardClassNames}
            onClick={() => typeof onClick === 'function' && onClick(id)}
            style={{
                cursor: typeof onEdit === 'function' ? 'default' : 'pointer'
            }}>
            {typeof onEdit === 'function' && (
                <div className="card__edit">
                    <Icon icon="bi bi-three-dots-vertical" onClick={() => onEdit(id)} />
                </div>
            )}
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
                            : 'mtl.'}
                    </div>
                </div>
            </div>
            {shouldShowDetails && <div className="card__content">{content}</div>}
        </div>
    );
};

Card.displayName = 'Card';

export default Card;
