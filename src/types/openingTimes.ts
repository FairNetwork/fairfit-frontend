export interface IOpeningTimes {
    id: string;
    type: OpeningTimeType;
    startTime: string;
    endTime: string;
}

export enum OpeningTimeType {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}
