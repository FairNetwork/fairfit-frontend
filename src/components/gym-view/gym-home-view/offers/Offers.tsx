import Carousel from '../../../shared/carousel/Carousel';
import { useAppSelector } from '../../../../hooks/redux';
import { selectAbonnementsById, selectOffersById } from '../../../../redux/gym/selectors';
import React, { useCallback, useContext, useMemo } from 'react';
import './offers.scss';
import { RootState } from '../../../../redux/store';
import { GymContext } from '../../../App';

const Offers = () => {
    // const dispatch = useAppDispatch();

    const { gymId } = useContext(GymContext);

    const offersSelector = useCallback(
        (state: RootState) => selectOffersById(state, gymId),
        [gymId]
    );
    const abonnementsSelector = useCallback(
        (state: RootState) => selectAbonnementsById(state, gymId),
        [gymId]
    );

    const offers = useAppSelector(offersSelector);
    const abonnements = useAppSelector(abonnementsSelector);

    // const navigate = useNavigate();

    /*
    const handleCardClick = useCallback(
        (id: Offer['id']) => {
            let selectedOffer;

            offers?.forEach((offer) => {
                if (offer.id === id) {
                    selectedOffer = offer;
                }
            });

            dispatch(setSelectedOffer(selectedOffer));

            navigate(`/${gymId}/offers`);
        },
        [dispatch, gymId, navigate, offers]
    );

     */

    const combinedOffers = useMemo(() => {
        return [...(offers ?? []), ...(abonnements ?? [])];
    }, [abonnements, offers]);

    return (
        <div className="offers">
            <h2>Abonnements | Angebote</h2>
            <div className="offers__content">
                {combinedOffers.length > 0 && <Carousel items={combinedOffers} />}
            </div>
        </div>
    );
};

Offers.displayName = 'Offers';

export default Offers;
