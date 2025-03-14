import { useLocation, useNavigate } from 'react-router-dom';
import { PricingType } from '../types/pricing';

export const useIsCurrentRoute = (route: string) => {
    const location = useLocation();

    return location.pathname === route;
};

export const useSignUpType = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const type = location.search.replace('?plan=', '');

    const isValidType = (value: string): value is PricingType => {
        return Object.values(PricingType).includes(value as PricingType);
    };

    if (!isValidType(type)) {
        window.setTimeout(() => {
            navigate('/utility/pricing');
        }, 1);

        return undefined;
    }

    return type;
};
