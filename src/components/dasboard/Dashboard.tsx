import * as React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { selectGymLoadingState, selectHasGymLoaded } from '../../redux/gym/selectors';
import { useEffect, useMemo } from 'react';
import Abonnements from './abonnements/Abonnements';
import { selectIsLoggedIn } from '../../redux/login/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { extractAccessToken, getGymFromRoute } from '../../utils/routes';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { confirmRegistration, getIsUserLoggedIn } from '../../redux/login/actions';
import { loadGym } from '../../redux/gym/actions';
import Studio from './studio/Studio';
import ComingSoon from '../shared/coming-soon/ComingSoon';
import Benefits from './benefits/Benefits';
import './dashboard.scss';
import HomepageAnalytics from './homepage-analytics/HomepageAnalytics';

const Dashboard = () => {
    const dispatch = useAppDispatch();

    const loadingState = useAppSelector(selectGymLoadingState);
    const hasGymLoaded = useAppSelector(selectHasGymLoaded);
    const isLoggedIn = useAppSelector(selectIsLoggedIn);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const currentGymId = getGymFromRoute(location.pathname);
        dispatch(updateCurrentGymId(currentGymId));

        if (typeof isLoggedIn !== 'boolean') {
            void dispatch(getIsUserLoggedIn());
        }

        const accessToken = extractAccessToken();

        if (accessToken) {
            void dispatch(confirmRegistration());
        } else if (typeof isLoggedIn === 'boolean') {
            if (!isLoggedIn) {
                navigate('/log-in');
            } else {
                void dispatch(loadGym(true));
            }
        }
    }, [dispatch, hasGymLoaded, isLoggedIn, location.pathname, navigate]);

    useEffect(() => {
        if (loadingState === 'rejected' && typeof isLoggedIn === 'boolean') {
            navigate('/no_content');
        }
    }, [isLoggedIn, loadingState, navigate]);

    const content = useMemo(() => {
        switch (true) {
            case location.pathname.includes('/dashboard/abonnements'):
                return <Abonnements />;
            case location.pathname.includes('/dashboard/benefits'):
                return <Benefits />;
            case location.pathname.includes('/dashboard/social-media'):
            case location.pathname.includes('/dashboard/social-media/instagram'):
            case location.pathname.includes('/dashboard/social-media/facebook'):
            case location.pathname.includes('/dashboard/analytics'):
            case location.pathname.includes('/dashboard/analytics/social-media'):
                return <ComingSoon />;
            case location.pathname.includes('/dashboard/analytics/homepage'):
                return <HomepageAnalytics />;
            case location.pathname.includes('/dashboard/gym'):
            default:
                return <Studio />;
        }
    }, [location.pathname]);

    return <div className="dashboard">{content}</div>;
};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
