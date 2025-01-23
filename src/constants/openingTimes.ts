import { OpeningTimeType } from '../types/openingTimes';

export const OPENING_TIMES_DATA = {
    [OpeningTimeType.MONDAY]: {
        name: 'Montag'
    },
    [OpeningTimeType.TUESDAY]: {
        name: 'Dienstag'
    },
    [OpeningTimeType.WEDNESDAY]: {
        name: 'Mittwoch'
    },
    [OpeningTimeType.THURSDAY]: {
        name: 'Donnerstag'
    },
    [OpeningTimeType.FRIDAY]: {
        name: 'Freitag'
    },
    [OpeningTimeType.SATURDAY]: {
        name: 'Samstag'
    },
    [OpeningTimeType.SUNDAY]: {
        name: 'Sonntag'
    },
    [OpeningTimeType.HOLIDAY]: {
        name: 'Feiertag'
    }
};
