import { Abonnement } from './abonnement';
import { IBenefit } from './benefit';
import { ISocialMedia } from './socialMedia';
import { IOpeningTimes } from './openingTimes';

export enum GymType {
    GYM,
    FOOTBALL,
    VOLLEYBALL,
    BASEBALL,
    TABLE_TENNIS,
    AMERICAN_FOOTBALL,
    BASKETBALL,
    GOLF,
    BOWLING,
    SWIMMING,
    HOCKEY
}

export enum Gender {
    MALE,
    FEMALE,
    DIVERS
}

export interface Gym {
    id: string;
    name: string;
    address: string;
    mail?: string;
    type: GymType;
    image: string;
    abonnements?: Abonnement[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
    openingTimes?: IOpeningTimes[];
}

export interface GymHistory {
    id: Gym['id'];
    name: Gym['name'];
    type: Gym['type'];
}
