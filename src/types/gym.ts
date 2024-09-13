import { Offer } from './offer';
import { ISocialMedia } from './socialMedia';
import { IBenefit } from './benefit';

export interface IGym {
    name: string;
    id: string;
    internalId: string;
    address: string;
    gymImage: string;
    rating: number;
    abonnements: Offer[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
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
