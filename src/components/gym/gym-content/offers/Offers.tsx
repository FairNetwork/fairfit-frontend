import Carousel from '../../../shared/carousel/Carousel';
import { useAppSelector } from '../../../../hooks/redux';
import './offers.scss';
import { selectAbonnements, selectOffers } from '../../../../redux/gym/selectors';
import { useMemo } from 'react';

const Offers = () => {
    const offers = useAppSelector(selectOffers);
    const abonnements = useAppSelector(selectAbonnements);

    const combinedOffers = useMemo(() => {
        return [...(offers ?? []), ...(abonnements ?? [])];
    }, [abonnements, offers]);

    return (
        <div className="gym-home-offers">
            <h2>Abonnements | Angebote</h2>
            <div className="gym-home-offers__content">
                {combinedOffers.length > 0 && <Carousel items={combinedOffers} />}
            </div>
        </div>
    );
};

Offers.displayName = 'Offers';

export default Offers;
