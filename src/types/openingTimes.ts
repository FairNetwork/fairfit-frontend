import { Dayjs } from 'dayjs';

export interface IOpeningTimes {
    id: string;
    type: OpeningTimeType;
    startTime: string;
    endTime: string;
}

export interface TmpOpeningTimes {
    id: string;
    type: OpeningTimeType;
    startTime: Dayjs | null;
    endTime: Dayjs | null;
}

export enum OpeningTimeType {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY,
    HOLIDAY
}
