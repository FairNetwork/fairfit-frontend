import * as React from 'react';
import { AppProvider, Branding } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    selectGymLoadingState,
    selectGymName,
    selectHasGymLoaded
} from '../../redux/gym/selectors';
import { DASHBOARD_NAVIGATION, DASHBOARD_THEME } from '../../constants/dashboard';
import { useDashboardRouter } from '../../hooks/dashboard';
import { useEffect, useMemo } from 'react';
import Abonnements from './abonnements/Abonnements';
import { selectIsLoggedIn } from '../../redux/login/selectors';
import { useLocation, useNavigate } from 'react-router-dom';
import { extractAccessToken, getGymFromRoute } from '../../utils/routes';
import { updateCurrentGymId } from '../../redux/gym/slice';
import { confirmRegistration, getIsUserLoggedIn } from '../../redux/login/actions';
import { loadGym } from '../../redux/gym/actions';
import Studio from './studio/Studio';

export default function DashboardLayoutBasic() {
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

    const gymName = useAppSelector(selectGymName);

    const router = useDashboardRouter(`/studio`);

    const branding: Branding = useMemo(() => {
        return {
            logo: <div />,
            title: gymName ?? 'FariFit'
        };
    }, [gymName]);

    const content = useMemo(() => {
        switch (router.pathname) {
            case '/abonnements':
                return <Abonnements />;
            case '/benefits':
                return <Abonnements />;
            case '/instagram':
            case '/facebook':
            case '/social-media':
            case '/social-media/instagram':
            case '/social-media/facebook':
            case '/homepage':
                return <Abonnements />;
            case '/studio':
            default:
                return <Studio />;
        }
    }, [router.pathname]);

    return (
        <AppProvider
            navigation={DASHBOARD_NAVIGATION}
            router={router}
            branding={branding}
            theme={DASHBOARD_THEME}>
            <DashboardLayout>
                <PageContainer>{content}</PageContainer>
            </DashboardLayout>
        </AppProvider>
    );
}
