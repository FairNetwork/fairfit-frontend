export interface Offer {
    id: string;
    isOffer: boolean;
    title: string;
    details: string[];
    price: number;
    duration?: number;
    priceAfterDuration?: number;
}
