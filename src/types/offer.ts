export interface Offer {
    id: string;
    color: string;
    title: string;
    duration: number;
    details: string;
    price: number;
    additionalPrices?: {
        startUp?: number;
        trainer?: number;
    };
}

export interface Gym {
    name: string;
    offers: Offer[];
    abonnements: Offer[];
    agbs: string;
}
