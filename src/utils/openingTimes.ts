import { OpeningTimeType } from '../types/openingTimes';

export const getCurrentOpeningTimeType = (): OpeningTimeType => {
    const dayMapping: OpeningTimeType[] = [
        OpeningTimeType.SUNDAY,
        OpeningTimeType.MONDAY,
        OpeningTimeType.TUESDAY,
        OpeningTimeType.WEDNESDAY,
        OpeningTimeType.THURSDAY,
        OpeningTimeType.FRIDAY,
        OpeningTimeType.SATURDAY
    ];

    const today = new Date().getDay();
    return dayMapping[today];
};
