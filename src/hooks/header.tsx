import { useLocation } from 'react-router-dom';
import Search from '../components/shared/header/search/Search';
import GymHeader from '../components/shared/header/gym-header/GymHeader';
import DashboardHeader from '../components/shared/header/dashboard-header/DashboardHeader';
import EmptyHeader from '../components/shared/header/empty-header/EpmtyHeader';

export const useHeaderContent = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Search />;
    }

    if (location.pathname.includes('/dashboard')) {
        return <DashboardHeader />;
    }

    if (location.pathname.startsWith('/utility') || location.pathname.startsWith('/no_content')) {
        return <EmptyHeader />;
    }

    return <GymHeader />;
};
