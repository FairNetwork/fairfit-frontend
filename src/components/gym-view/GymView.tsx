import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLocation } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { loadGym } from '../../redux/gym/actions';
import { getGymFromRoute } from '../../utils/routes';
import NotAvailable from '../shared/not-available/NotAvailable';
import GymHomeView from './gym-home-view/GymHomeView';
import { selectGymLoadingState } from '../../redux/gym/selectors';
import LoadingGymHomeView from '../loading-views/loading-gym-home-view/LoadingGymHomeView';
import { GymContext } from '../App';

const GymView = () => {
    const dispatch = useAppDispatch();

    const { updateGymInternalId } = useContext(GymContext);

    const loadingState = useAppSelector(selectGymLoadingState);

    const location = useLocation();

    useEffect(() => {
        void dispatch(loadGym(getGymFromRoute(location.pathname)));

        if (typeof updateGymInternalId === 'function') {
            updateGymInternalId(getGymFromRoute(location.pathname));
        }
    }, [dispatch, location.pathname, updateGymInternalId]);

    const content = useMemo(() => {
        switch (loadingState) {
            case 'rejected':
                return <NotAvailable />;
            case 'successful':
                return <GymHomeView />;
            default:
                return <LoadingGymHomeView />;
        }
    }, [loadingState]);

    return <div>{content}</div>;
};

GymView.displayName = 'GymView';

export default GymView;
