export interface Offer {
    id: string;
    isOffer: boolean;
    color: string;
    title: string;
    details: string[];
    price: number;
}

export interface Gym {
    name: string;
    offers: Offer[];
    abonnements: Offer[];
    agbs: string;
}
