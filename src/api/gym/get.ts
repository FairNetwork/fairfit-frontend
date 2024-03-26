import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

interface GetGymResult {
    id: string;
    name: string;
    email: string;
}

export const getGym = async (name: string): Promise<ApiFunctionResult<GetGymResult>> => {
    const response = await request<GetGymResult>({
        method: 'GET',
        route: `tenants/${name}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
