import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { Statistics } from '../../types/statistics';

export const getStatistics = async (id: string): Promise<ApiFunctionResult<Statistics>> => {
    const response = await request<Statistics>({
        method: 'GET',
        route: `statistics/${id}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
