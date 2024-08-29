import './homeContent.scss';
import { ReactElement, useMemo } from 'react';
import GymCard from './gym-card/GymCard';
import { useAppSelector } from '../../../hooks/redux';
import { selectGyms } from '../../../redux/gym/selectors';

const HomeContent = () => {
    const gyms = useAppSelector(selectGyms);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        Object.values(gyms).forEach(({ name, internalId, location }) => {
            items.push(
                <GymCard
                    key={`gym-card__${internalId}`}
                    internalId={internalId}
                    name={name}
                    location={location}
                    picture="https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png"
                />
            );
        });

        return items;
    }, [gyms]);

    return (
        <div className="home-content">
            <h3>Deine Ergebnisse</h3>
            {content}
        </div>
    );
};

HomeContent.displayName = 'HomeContent';

export default HomeContent;
