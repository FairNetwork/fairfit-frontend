import { OpeningTimeType } from '../types/openingTimes';

export const convertMonth = ({
    duration,
    priceAfterDuration
}: {
    duration: number;
    priceAfterDuration: number;
}) => {
    return `für ${duration} ${duration === 1 ? 'Monat' : 'Monate'}, danach ${priceAfterDuration} €`;
};

export const convertDay = (day: OpeningTimeType) => {
    switch (day) {
        case OpeningTimeType.MONDAY:
            return 'Montag';
        case OpeningTimeType.TUESDAY:
            return 'Dienstag';
        case OpeningTimeType.WEDNESDAY:
            return 'Mittwoch';
        case OpeningTimeType.THURSDAY:
            return 'Donnerstag';
        case OpeningTimeType.FRIDAY:
            return 'Freitag';
        case OpeningTimeType.SATURDAY:
            return 'Samstag';
        case OpeningTimeType.SUNDAY:
            return 'Sonntag';
        case OpeningTimeType.HOLIDAY:
            return 'Feiertag';
        default:
            return undefined;
    }
};
