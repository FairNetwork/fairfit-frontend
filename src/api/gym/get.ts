import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { GYMS } from '../../_mock-data/gyms';
import { Location } from '../../types/gym';

export interface GetGymResult {
    id: string;
    name: string;
    email: string;
    location: Location;
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

export const getAllGyms = async (): Promise<ApiFunctionResult<GetGymResult[]>> => {
    // const response = await request<GetGymResult[]>({
    //     method: 'GET',
    //     route: `tenants/all`
    // });
    //
    // if (response.status === 200) {
    //     return { data: response.data, status: 200 };
    // }
    //
    // return { status: response.status };

    // ToDo remove mock data
    return { status: 200, data: GYMS };
};
