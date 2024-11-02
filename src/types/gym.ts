import { Offer } from './offer';
import { ISocialMedia } from './socialMedia';
import { IBenefit } from './benefit';
import { IOpeningTimes } from './openingTimes';
import { IUtility } from './utility';
import { ITag } from './tag';

export interface IGym {
    name: string;
    id: string;
    internalId: string;
    address: string;
    slogan: string;
    gymImage: string;
    rating: number;
    hasLoaded?: boolean;
    tags: ITag[];
    abonnements: Offer[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
    openingTimes?: IOpeningTimes[];
    utilitys?: IUtility[];
}

export interface GymUpdate {
    name: string;
    id: string;
    internalId: string;
    address: string;
    slogan: string;
    gymImage: string;
    rating: number;
    hasLoaded?: boolean;
    tags: string[];
    abonnements: Offer[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
    openingTimes?: IOpeningTimes[];
    utilitys?: IUtility[];
}
