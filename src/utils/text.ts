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

export const convertStatisticsTimeline = (dateString: string) => {
    const [monthStr, yearStr] = dateString.split('/');
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);
    const currentYear = new Date().getFullYear();

    const months = [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez'
    ];

    if (month < 1 || month > 12) {
        throw new Error(
            'Ungültige Monatszahl. Bitte eine Zahl zwischen 1 und 12 im Datum verwenden.'
        );
    }

    const monthName = months[month - 1];

    return year === currentYear ? monthName : `${monthName} ${year}`;
};
