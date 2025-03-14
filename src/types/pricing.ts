export enum PricingType {
    DEFAULT = '019593ea-9c28-7ad3-833c-e58de6c73220',
    PREMIUM = '019593ea-c568-7b3e-8937-f7da3de8caee'
}

export type PricingBenefits = { [key: string]: PricingType[] };

export interface Pricing {
    name: string;
    type: PricingType;
    price: number;
    description: string;
}
