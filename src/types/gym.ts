import { Offer } from './offer';

export interface IGym {
    name: string;
    id: string;
    internalId: string;
    logo: string;
    image: string;
    agbs?: string;
    offers: Offer[];
    abonnements: Offer[];
    benefits?: Benefit[];
    socialMedia?: ISocialMedia[];
    contact?: Contact;
    location?: Location;
    openingTimes?: OpeningTime[];
    hasLoaded?: boolean;
}

export interface Benefit {
    id: string;
    imageUrl: string;
}

export enum SocialMediaType {
    INSTAGRAM,
    FACEBOOK,
    YOUTUBE,
    TIKTOK,
    TWITTER
}

export interface ISocialMedia {
    id: string;
    type: SocialMediaType;
    userName: string;
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

export interface Location {
    address: string;
    coordinates?: [number, number];
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
