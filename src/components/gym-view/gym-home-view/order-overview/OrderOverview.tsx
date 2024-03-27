import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import NotAvailable from '../../../shared/not-available/NotAvailable';
import { selectGymById, selectGymLoadingState } from '../../../../redux/gym/selectors';
import LoadingOrderView from '../../../loading-views/loading-order-view/LoadingOrderView';
import OrderView from './order-view/OrderView';
import { getGymFromRoute, getOfferId } from '../../../../utils/routes';
import { GymContext } from '../../../App';
import { useLocation } from 'react-router-dom';
import { RootState } from '../../../../redux/store';
import { loadGym } from '../../../../redux/gym/actions';
import { setSelectedOffer } from '../../../../redux/user/slice';

const OrderOverview = () => {
    const { updateGymInternalId, gymInternalId } = useContext(GymContext);

    const gymSelector = useCallback(
        (state: RootState) => selectGymById(state, gymInternalId),
        [gymInternalId]
    );

    const gym = useAppSelector(gymSelector);

    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);

    const [isValidId, setIsValidId] = useState<boolean>();

    const location = useLocation();

    useEffect(() => {
        void dispatch(loadGym(getGymFromRoute(location.pathname)));

        if (typeof updateGymInternalId === 'function') {
            updateGymInternalId(getGymFromRoute(location.pathname));
        }
    }, [dispatch, location.pathname, updateGymInternalId]);

    useEffect(() => {
        const combinedOffers = [...(gym?.offers ?? []), ...(gym?.abonnements ?? [])];

        const offerId = getOfferId(location.search);

        if (!offerId) {
            setIsValidId(true);
        }

        combinedOffers.forEach(({ id }) => {
            if (id === offerId) {
                setIsValidId(true);
                dispatch(setSelectedOffer(offerId));
            }
        });
    }, [dispatch, gym?.abonnements, gym?.offers, location.search]);

    const content = useMemo(() => {
        switch (true) {
            case loadingState === 'rejected':
            case isValidId === false && loadingState === 'successful':
                return <NotAvailable />;
            case loadingState === 'successful':
                return <OrderView />;
            default:
                return <LoadingOrderView />;
        }
    }, [isValidId, loadingState]);

    return <div>{content}</div>;
};

OrderOverview.displayName = 'OrderOverview';

export default OrderOverview;
