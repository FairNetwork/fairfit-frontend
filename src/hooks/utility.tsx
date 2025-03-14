import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import UtilityImpressum from '../view/utility/utility-impressum/UtilityImpressum';
import UtilityDataProtection from '../view/utility/utility-data-protection/UtilityDataProtection';
import UtilityPricing from '../view/utility/utility-pricing/UtilityPricing';

export const useUtilityContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        if (path.endsWith('/data-protection')) {
            return <UtilityDataProtection />;
        }

        if (path.includes('/pricing')) {
            return <UtilityPricing />;
        }

        return <UtilityImpressum />;
    }, [location.pathname]);
};
