import { useLocation, useNavigate } from 'react-router-dom';
import DashboardStatistics from '../view/dashboard/dasboard-statistics/DashboardStatistics';
import DashboardBenefits from '../view/dashboard/dashboard-benefits/DashboardBenefits';
import DashboardSettings from '../view/dashboard/dashboard-settings/DashboardSettings';
import { selectSubscriptionType } from '../redux/gym/selectors';
import { useAppSelector } from './redux';
import { PricingType } from '../types/pricing';

export const useDashboardContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const subscriptionType = useAppSelector(selectSubscriptionType);

    if (location.pathname.includes('statistics')) {
        if ([PricingType.LEGEND, PricingType.CHAMPION].includes(subscriptionType)) {
            return <DashboardStatistics />;
        }

        navigate('/utility/pricing');

        return undefined;
    }

    if (location.pathname.includes('socialmedia')) {
        if ([PricingType.LEGEND].includes(subscriptionType)) {
            return undefined;
        }

        navigate('/utility/pricing');

        return undefined;
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
