export interface Statistic {
    id: string;
    type: StatisticType;
    entries: StatisticEntry[];
}

export interface StatisticEntry {
    month: string;
    total: number;
}

export enum StatisticType {
    REQUESTS,
    ABONNEMENTS
}
