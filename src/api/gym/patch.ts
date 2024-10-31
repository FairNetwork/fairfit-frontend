import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IGym } from '../../types/gym';

export const patchGym = async (update: Partial<IGym>, id: string): Promise<ApiFunctionResult> => {
    const response = await request({
        method: 'PATCH',
        body: update,
        route: `gyms/${id}`
    });

    return { status: response.status, data: response.data };
};
