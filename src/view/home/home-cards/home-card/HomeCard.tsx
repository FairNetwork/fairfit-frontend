import './homeCard.scss';
import { FC } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import { useGymTypeIcons } from '../../../../hooks/gym';
import { GymType } from '../../../../types/gym';
import Section from '../../../../components/shared/section/Section';

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
        <Section className="home-card">
            <img src={image} alt={`${name} image`} />
            <div className="home-card__content">
                <div className="home-card__content__name">{name}</div>
                <div className="home-card__content__location">{location}</div>
            </div>
        </Section>
    );
};

HomeCard.displayName = 'HomeCard';

export default HomeCard;
