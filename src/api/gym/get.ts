import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IGym } from '../../types/gym';

export interface GetGymResult {
    id: string;
    name: string;
    address: string;
}

export const getGym = async (id: string): Promise<ApiFunctionResult<IGym>> => {
    const response = await request<IGym>({
        method: 'GET',
        route: `gyms/${id}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};

export const getAllGyms = async (): Promise<ApiFunctionResult<GetGymResult[]>> => {
    const response = await request<GetGymResult[]>({
        method: 'GET',
        route: `gyms`
    });

    console.log(response);

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
