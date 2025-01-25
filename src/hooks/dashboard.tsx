import { useLocation, useNavigate } from 'react-router-dom';
import DashboardStatistics from '../view/dashboard/dasboard-statistics/DashboardStatistics';
import DashboardBenefits from '../view/dashboard/dashboard-benefits/DashboardBenefits';
import DashboardSettings from '../view/dashboard/dashboard-settings/DashboardSettings';

export const useDashboardContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    if (location.pathname.includes('statistics')) {
        return <DashboardStatistics />;
    }

    if (location.pathname.includes('benefits')) {
        return <DashboardBenefits />;
    }

    if (location.pathname.includes('settings')) {
        return <DashboardSettings />;
    }

    navigate('/no_content');

    return undefined;
};
