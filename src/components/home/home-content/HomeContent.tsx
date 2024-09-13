import './homeContent.scss';
import { ReactElement, useMemo } from 'react';
import GymCard from './gym-card/GymCard';
import { useAppSelector } from '../../../hooks/redux';
import { selectAllGymsLoadingState, selectFilteredGyms } from '../../../redux/gym/selectors';
import WaitCursor from '../../shared/wait-cursor/WaitCursor';

const HomeContent = () => {
    const gyms = useAppSelector(selectFilteredGyms);
    const loadingState = useAppSelector(selectAllGymsLoadingState);

    const content = useMemo(() => {
        const items: ReactElement[] = [];

        gyms.forEach(({ name, internalId, address, rating, gymImage }) => {
            items.push(
                <GymCard
                    key={`gym-card__${internalId}`}
                    internalId={internalId}
                    name={name}
                    address={address}
                    rating={rating}
                    gymImage={gymImage}
                />
            );
        });

        return items;
    }, [gyms]);

    return (
        <div className="home-content">
            <h3>Deine Ergebnisse</h3>
            {content}
            {loadingState === 'pending' && <WaitCursor />}
        </div>
    );
};

HomeContent.displayName = 'HomeContent';

export default HomeContent;
