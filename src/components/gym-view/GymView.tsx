import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useLocation } from 'react-router-dom';
import { useCallback, useContext, useEffect, useMemo } from 'react';
import { loadGym } from '../../redux/gym/actions';
import { getGymFromRoute } from '../../utils/routes';
import NotAvailable from '../shared/not-available/NotAvailable';
import GymHomeView from './gym-home-view/GymHomeView';
import { selectContactById, selectGymLoadingState } from '../../redux/gym/selectors';
import LoadingGymHomeView from '../loading-views/loading-gym-home-view/LoadingGymHomeView';
import { GymContext } from '../App';
import { RootState } from '../../redux/store';

const GymView = () => {
    const dispatch = useAppDispatch();

    const { updateGymId, gymId } = useContext(GymContext);

    const gymSelector = useCallback((state: RootState) => selectContactById(state, gymId), [gymId]);

    const gym = useAppSelector(gymSelector);

    const loadingState = useAppSelector(selectGymLoadingState);

    const location = useLocation();

    useEffect(() => {
        if (!gym) {
            void dispatch(loadGym(getGymFromRoute(location.pathname)));
        }

        if (typeof updateGymId === 'function') {
            updateGymId(getGymFromRoute(location.pathname));
        }
    });

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
