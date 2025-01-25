import { useLocation } from 'react-router-dom';
import GymHeader from '../components/shared/header/gym-header/GymHeader';
import DashboardHeader from '../components/shared/header/dashboard-header/DashboardHeader';
import EmptyHeader from '../components/shared/header/empty-header/EpmtyHeader';
import HomeHeader from '../components/shared/header/home-header/HomeHeader';

export const useHeaderContent = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <HomeHeader />;
    }

    if (location.pathname.includes('/dashboard') || location.pathname.includes('/offers')) {
        return <DashboardHeader />;
    }

    if (
        location.pathname.startsWith('/utility') ||
        location.pathname.startsWith('/no_content') ||
        location.pathname.startsWith('/log-in') ||
        location.pathname.startsWith('/secret') ||
        location.pathname.startsWith('/sign-up')
    ) {
        return <EmptyHeader />;
    }

    return <GymHeader />;
};
