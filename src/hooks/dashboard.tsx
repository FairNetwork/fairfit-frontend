import { useLocation, useNavigate } from 'react-router-dom';
import DashboardStatistics from '../view/dashboard/dasboard-statistics/DashboardStatistics';

export const useDashboardContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname.includes('statistics')) {
        return <DashboardStatistics />;
    }

    navigate('/no_content');

    return undefined;
};
