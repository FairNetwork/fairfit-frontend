export interface Offer {
    id: string;
    isOffer: boolean;
    title: string;
    details: Detail[];
    price: number;
    duration?: number;
    priceAfterDuration?: number;
}

export interface Detail {
    id: string;
    detail: string;
}
