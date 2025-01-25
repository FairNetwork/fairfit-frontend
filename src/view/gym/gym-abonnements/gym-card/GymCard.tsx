import './gymCard.scss';
import { FC } from 'react';
import { Abonnement } from '../../../../types/abonnement';

interface GymCardProps {
    title: Abonnement['title'];
    price: Abonnement['price'];
    details: Abonnement['details'];
}

const GymCard: FC<GymCardProps> = ({ price, title, details }) => {
    return (
        <div className="gym-card">
            <div className="gym-card__name">{title}</div>
            <div className="gym-card__price">
                {price}€ /&nbsp;<div className="gym-card__price__monthly">monatlich</div>
            </div>
            <ul className="gym-card__list">
                {details.map(({ detail, id }) => (
                    <li key={`detail--${id}`}>{detail}</li>
                ))}
            </ul>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
