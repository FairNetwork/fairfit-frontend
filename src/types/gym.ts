import { Offer } from './offer';

export interface Gym {
    name: string;
    id: string;
    internalId: string;
    logo: string;
    agbs?: string;
    offers: Offer[];
    abonnements: Offer[];
    benefits?: Benefit[];
    contact?: Contact;
    location?: Location;
    openingTimes?: OpeningTime[];
    hasLoaded?: boolean;
}

export interface Benefit {
    id: string;
    imageUrl: string;
    type: BenefitType;
}

export enum BenefitType {
    Equipment,
    Courses,
    Otherwise
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

export enum DayType {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

export interface OpeningTime {
    day: DayType;
    startTime: string;
    endTime: string;
}
