import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

export interface GetRequestStatisticsResult {
    id: string;
}

export const getRequestStatistics = async (
    id: string
): Promise<ApiFunctionResult<GetRequestStatisticsResult>> => {
    const response = await request<GetRequestStatisticsResult>({
        method: 'GET',
        route: `statistics/requests/${id}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
