import { useLocation, useNavigate } from 'react-router-dom';
import DashboardStatistics from '../view/dashboard/dasboard-statistics/DashboardStatistics';
import DashboardBenefits from '../view/dashboard/dashboard-benefits/DashboardBenefits';

export const useDashboardContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname.includes('statistics')) {
        return <DashboardStatistics />;
    }

    if (location.pathname.includes('benefits')) {
        return <DashboardBenefits />;
    }

    navigate('/no_content');

    return undefined;
};
