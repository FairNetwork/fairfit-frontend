import { DayType } from '../types/gym';

export const convertMonth = ({
    duration,
    priceAfterDuration
}: {
    duration: number;
    priceAfterDuration: number;
}) => {
    return `für ${duration} ${duration === 1 ? 'Monat' : 'Monate'}, danach ${priceAfterDuration} €`;
};

export const convertDay = (day: DayType) => {
    switch (day) {
        case DayType.Monday:
            return 'Montag';
        case DayType.Tuesday:
            return 'Dienstag';
        case DayType.Wednesday:
            return 'Mittwoch';
        case DayType.Thursday:
            return 'Donnerstag';
        case DayType.Friday:
            return 'Freitag';
        case DayType.Saturday:
            return 'Samstag';
        case DayType.Sunday:
            return 'Sonntag';
        default:
            return undefined;
    }
};
