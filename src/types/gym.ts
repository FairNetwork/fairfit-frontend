import { Offer } from './offer';
import { ISocialMedia } from './socialMedia';
import { IBenefit } from './benefit';
import { IOpeningTimes } from './openingTimes';
import { IUtility } from './utility';

export interface IGym {
    name: string;
    id: string;
    internalId: string;
    address: string;
    gymImage: string;
    rating: number;
    hasLoaded?: boolean;
    abonnements: Offer[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
    openingTimes?: IOpeningTimes[];
    utilitys?: IUtility[];
}
