export interface RequestStatistic {
    month: string;
    totalRequests: number;
}

export interface Statistics {
    requests: RequestStatistic[];
    abonnements: RequestStatistic[];
}
