import './gymCard.scss';
import { Gym } from '../../../types/gym';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface GymCardProps {
    picture: string;
    name: Gym['name'];
    location: Gym['location'];
    internalId: Gym['internalId'];
}

const GymCard = ({ name, internalId, picture, location }: GymCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${internalId}`);
    };

    return (
        <div className="gym-card" onClick={handleClick}>
            <div className="gym-card__picture">
                <img src={picture} alt={name} />
            </div>
            <div className="gym-card__info">
                <div className="gym-card__info__name">{name}</div>
                <div className="gym-card__info__location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    {location?.address}
                </div>
            </div>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
