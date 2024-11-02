import { Dayjs } from 'dayjs';

export interface IOpeningTimes {
    id: string;
    type: OpeningTimeType;
    startTime: string;
    endTime: string;
    closed: boolean;
}

export interface TmpOpeningTimes {
    id: string;
    type: OpeningTimeType;
    startTime: Dayjs | null;
    endTime: Dayjs | null;
    closed: boolean;
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
