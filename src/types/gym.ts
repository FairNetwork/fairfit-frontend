import { Abonnement } from './abonnement';
import { IBenefit } from './benefit';
import { ISocialMedia } from './socialMedia';
import { IOpeningTimes } from './openingTimes';
import { Statistic } from './statistic';
import { PricingType } from './pricing';

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
    subscriptionType: PricingType;
    image: string;
    abonnements?: Abonnement[];
    benefits?: IBenefit[];
    socialMedia?: ISocialMedia[];
    openingTimes?: IOpeningTimes[];
    statistics?: Statistic[];
}

export interface GymHistory {
    id: Gym['id'];
    name: Gym['name'];
    type: Gym['type'];
}
