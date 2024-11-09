import { UtilityType } from '../types/utility';

export const getUtilityType = (type: string): UtilityType | undefined => {
    switch (type) {
        case 'data-protection':
            return UtilityType.DATA_PROTECTION;
        case 'revocation':
            return UtilityType.REVOCATION;
        case 'terms-conditions':
            return UtilityType.TERMS;
        case 'impressum':
            return UtilityType.IMPRINT;
        default:
            return undefined;
    }
};
