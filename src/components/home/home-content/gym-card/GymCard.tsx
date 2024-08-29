import './gymCard.scss';
import { Gym } from '../../../../types/gym';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Icon from '../../../../components1/shared/icon/Icon';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

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
                <div className="gym-card__info__rating">
                    <Rating
                        name="rating"
                        readOnly
                        size="small"
                        value={3.2}
                        precision={0.1}
                        emptyIcon={
                            <StarIcon style={{ opacity: 0.55, color: 'grey' }} fontSize="inherit" />
                        }
                    />
                    <div className="gym-card__info__rating__text">3.2 / 5</div>
                </div>
                <div className="gym-card__info__location">
                    <Icon icon="bi-geo" />
                    {location?.address}
                </div>
            </div>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
