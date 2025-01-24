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
    abonnements?: null;
    benefits?: null;
    socialMedia?: null;
    openingTimes?: null;
}

export interface GymHistory {
    id: Gym['id'];
    name: Gym['name'];
    type: Gym['type'];
}
