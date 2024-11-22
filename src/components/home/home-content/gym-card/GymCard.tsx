import './gymCard.scss';
import { IGym } from '../../../../types/gym';
import { useNavigate } from 'react-router-dom';
import React, { useMemo } from 'react';
import Icon from '../../../shared/icon/Icon';
import { Chip } from '@mui/material';
import backupImage from '../../../../assets/default_gym_image.png';

interface GymCardProps {
    gymImage: IGym['gymImage'];
    name: IGym['name'];
    address: IGym['address'];
    internalId: IGym['internalId'];
    tags: IGym['tags'];
}

const GymCard = ({ name, internalId, gymImage, address, tags }: GymCardProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${internalId}`);
    };

    const tagContent = useMemo(() => {
        return (tags as unknown as string[]).map((tag) => (
            <Chip key={`gym-card-filter--${name}-${tag}`} label={tag} size="small" />
        ));
    }, [name, tags]);

    return (
        <div className="gym-card" onClick={handleClick}>
            <div className="gym-card__picture">
                <img src={gymImage ?? backupImage} alt={name} />
            </div>
            <div className="gym-card__info">
                <div className="gym-card__info__name">{name}</div>
                <div className="gym-card__info__row">
                    <div className="gym-card__info__row__location">
                        <Icon icon="bi-geo" />
                        {address}
                    </div>
                    <div className="gym-card__info__row__tags">{tagContent}</div>
                </div>
            </div>
        </div>
    );
};

GymCard.displayName = 'GymCard';

export default GymCard;
