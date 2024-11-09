export interface User {
    gender?: Gender;
    firstName?: string;
    lastName?: string;
    street?: string;
    number?: string;
    place?: string;
    postcode?: string;
    birthday?: string;
    email?: string;
    iban?: string;
    owner?: string;
}

export enum Gender {
    MALE,
    FEMALE,
    DIVERS
}
