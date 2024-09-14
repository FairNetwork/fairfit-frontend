import './gymCard.scss';
import { IGym } from '../../../../types/gym';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import Icon from '../../../shared/icon/Icon';
import { Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

interface GymCardProps {
    gymImage: IGym['gymImage'];
    name: IGym['name'];
    address: IGym['address'];
    internalId: IGym['internalId'];
    rating: IGym['rating'];
}

const GymCard = ({ name, internalId, gymImage, address, rating }: GymCardProps) => {
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
                <div className="gym-card__info__rating">
                    <Rating
                        name="rating"
                        readOnly
                        size="small"
                        value={rating}
                        precision={0.1}
                        emptyIcon={
                            <StarIcon style={{ opacity: 0.55, color: 'grey' }} fontSize="inherit" />
                        }
                    />
                    <div className="gym-card__info__rating__text">{rating} / 5</div>
                </div>
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
