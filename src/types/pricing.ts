export enum PricingType {
    ATHLETE = '019593ea-9c28-7ad3-833c-e58de6c73220',
    CHAMPION = '019593ea-c568-7b3e-8937-f7da3de8caee',
    LEGEND = '01959473-4741-7bf3-9d77-941c7e340c86'
}

export type PricingBenefits = {
    [key: string]: {
        includes: string[];
        notIncluded: string[];
    };
};

export interface Pricing {
    name: string;
    type: PricingType;
    price: number;
    description: string;
    isDisabled?: boolean;
    badgeText?: string;
}
