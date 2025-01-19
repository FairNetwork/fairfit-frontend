import { useLocation } from 'react-router-dom';
import Search from '../components/shared/header/search/Search';
import GymHeader from '../components/shared/header/gym-header/GymHeader';

export const useHeaderContent = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Search />;
    } else if (
        location.pathname.startsWith('/utility') ||
        location.pathname.startsWith('/no_content')
    ) {
        return <></>;
    } else {
        return <GymHeader />;
    }
};
