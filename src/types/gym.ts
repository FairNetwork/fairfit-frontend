import { Offer } from './offer';

export interface Gym {
    name: string;
    id: string;
    internalId: string;
    logo: string;
    agbs?: string;
    offers: Offer[];
    abonnements: Offer[];
    contact?: Contact;
    location?: Location;
    openingTimes?: OpeningTime[];
}

export interface Contact {
    phone?: string;
    email?: string;
    socialMedia?: ISocialMedia;
}

export interface ISocialMedia {
    [key: string]: string;
}

export interface Location {
    address: string;
    coordinates: [number, number];
}

export interface OpeningTime {
    [key: string]: {
        start: Date;
        end: Date;
    };
}
