import './utilityPricing.scss';
import { useMemo } from 'react';
import { PricingType } from '../../../types/pricing';
import PricingPlan from './pricing-plan/PricingPlan';

const UtilityPricing = () => {
    const content = useMemo(() => {
        return Object.values(PricingType).map((type) => {
            return <PricingPlan key={`pricing-plan--${type}`} type={type} />;
        });
    }, []);

    return <div className="utility-pricing">{content}</div>;
};

UtilityPricing.displayName = 'UtilityPricing';

export default UtilityPricing;
