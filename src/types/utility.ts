export interface IUtility {
    id: string;
    type: UtilityType;
    html: string;
}

export enum UtilityType {
    IMPRINT,
    DATA_PROTECTION,
    TERMS,
    REVOCATION
}
