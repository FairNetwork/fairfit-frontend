import './homeCard.scss';
import { FC } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import { useGymTypeIcons } from '../../../../hooks/gym';
import { GymType } from '../../../../types/gym';

interface HomeCardProps {
    image: string;
    name: string;
    tags?: string[];
    location: string;
    type: GymType;
}

const HomeCard: FC<HomeCardProps> = ({ name, tags, type, location, image }) => {
    const { getIconForGymType } = useGymTypeIcons();

    return (
        <div className="home-card">
            <img src={image} alt={`${name} image`} />
            <div className="home-card__content">
                <div className="home-card__content__name">
                    <Icon
                        icon={getIconForGymType(type)}
                        style={{ width: '20px', textAlign: 'center' }}
                    />{' '}
                    {name}
                </div>
                <div className="home-card__content__location">
                    <Icon icon="fas fa-map-pin" style={{ width: '20px', textAlign: 'center' }} />{' '}
                    {location}
                </div>
            </div>
        </div>
    );
};

HomeCard.displayName = 'HomeCard';

export default HomeCard;
