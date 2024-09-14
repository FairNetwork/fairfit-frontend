export interface IUtility {
    id: string;
    type: UtilityType;
    html: string;
}

enum UtilityType {
    IMPRINT,
    DATA_PROTECTION,
    TERMS,
    REVOCATION
}
