import { useLocation } from 'react-router-dom';
import Search from '../components/shared/header/search/Search';
import GymHeader from '../components/shared/header/gym-header/GymHeader';

export const useHeaderContent = () => {
    const location = useLocation();

    if (location.pathname === '/') {
        return <Search />;
    } else {
        return <GymHeader />;
    }
};
