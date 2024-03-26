export interface Offer {
    id: string;
    isOffer: boolean;
    color: string;
    title: string;
    details: string[];
    price: number;
    duration?: number;
    priceAfterDuration?: number;
}

export interface Gym {
    name: string;
    offers: Offer[];
    abonnements: Offer[];
    agbs: string;
}
