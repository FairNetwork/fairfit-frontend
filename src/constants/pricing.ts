import { Pricing, PricingBenefits, PricingType } from '../types/pricing';

export const PRICING: Pricing[] = [
    {
        price: 19.0,
        name: 'Standard',
        type: PricingType.DEFAULT,
        description:
            'Ideal für Sportanbieter, die ihre Angebote und Öffnungszeiten einfach verwalten möchten und online mehr Sichtbarkeit erhalten wollen.'
    },
    {
        price: 59.0,
        name: 'Premium',
        type: PricingType.PREMIUM,
        description:
            'Optimal für Sporteinrichtungen, die ihre Reichweite maximieren möchten. Bietet erweiterte Funktionen wie detaillierte Statistiken und personalisierte Marketingoptionen.'
    }
];

export const PRICING_BENEFITS: PricingBenefits = {
    TEST1: [PricingType.PREMIUM, PricingType.DEFAULT],
    TEST2: [PricingType.PREMIUM, PricingType.DEFAULT],
    TEST3: [PricingType.PREMIUM, PricingType.DEFAULT],
    TEST4: [PricingType.PREMIUM]
};
