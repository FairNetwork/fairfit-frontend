import './gymCard.scss';
import { IGym } from '../../../../types/gym';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Icon from '../../../shared/icon/Icon';

interface GymCardProps {
    gymImage: IGym['gymImage'];
    name: IGym['name'];
    address: IGym['address'];
    internalId: IGym['internalId'];
}

const GymCard = ({ name, internalId, gymImage, address }: GymCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${internalId}`);
    };

    return (
        <div className="gym-card" onClick={handleClick}>
            <div className="gym-card__picture">
                <img src={gymImage} alt={name} />
            </div>
            <div className="gym-card__info">
                <div className="gym-card__info__name">{name}</div>
                <div className="gym-card__info__location">
                    <Icon icon="bi-geo" />
                    {address}
                </div>
            </div>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
