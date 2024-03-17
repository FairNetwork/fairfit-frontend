import { Offer } from '../types/offer';

export const convertMonth = (duration: Offer['duration']) => {
    return `${duration} ${duration === 1 ? 'Monat' : 'Monate'}`;
};
