import { PricingType } from '../types/pricing';
import { PRICING, PRICING_BENEFITS } from '../constants/pricing';

export const usePricing = (pricingType: PricingType) => {
    const pricingDetails = PRICING.find(({ type }) => pricingType === type);

    const [integerPart, decimalPart] = (pricingDetails?.price ?? 0).toFixed(2).split('.');

    return {
        name: pricingDetails?.name ?? '',
        description: pricingDetails?.description ?? '',
        price: { integerPart, decimalPart },
        isDisabled: pricingDetails?.isDisabled ?? false,
        badgeText: pricingDetails?.badgeText ?? '',
        benefits: PRICING_BENEFITS[pricingType]
    };
};
