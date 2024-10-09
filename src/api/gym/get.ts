import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IGym } from '../../types/gym';
import { ITag } from '../../types/tag';

export interface GetGymResult {
    id: IGym['id'];
    name: IGym['name'];
    tags: IGym['tags'];
    address: IGym['address'];
    gymImage: IGym['gymImage'];
    rating: IGym['rating'];
}

export const getGym = async (id: string, isDashboard = false): Promise<ApiFunctionResult<IGym>> => {
    const response = await request<IGym>({
        method: 'GET',
        route: `gyms/${id}?isDashboard=${isDashboard}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};

export const getAllGyms = async (
    searchString: string,
    tags: ITag['name'][]
): Promise<ApiFunctionResult<GetGymResult[]>> => {
    const response = await request<GetGymResult[]>({
        method: 'GET',
        route: `gyms?searchString=${searchString}&tags=${tags.join(',')}`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
