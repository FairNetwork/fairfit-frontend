import Carousel from '../../../shared/carousel/Carousel';
import { useAppSelector } from '../../../../hooks1/redux';
import { selectAbonnementsById, selectOffersById } from '../../../../redux/gym/selectors';
import React, { useCallback, useContext, useMemo } from 'react';
import './offers.scss';
import { RootState } from '../../../../redux/store';
import { GymContext } from '../../../App';

const Offers = () => {
    // const dispatch = useAppDispatch();

    const { gymInternalId } = useContext(GymContext);

    const offersSelector = useCallback(
        (state: RootState) => selectOffersById(state, gymInternalId),
        [gymInternalId]
    );
    const abonnementsSelector = useCallback(
        (state: RootState) => selectAbonnementsById(state, gymInternalId),
        [gymInternalId]
    );

    const offers = useAppSelector(offersSelector);
    const abonnements = useAppSelector(abonnementsSelector);

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
