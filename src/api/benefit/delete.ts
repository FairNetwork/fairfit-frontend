import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

export const deleteBenefit = async (id: string): Promise<ApiFunctionResult<boolean>> => {
    const response = await request<boolean>({
        method: 'DELETE',
        route: `benefit/${id}`
    });

    return { status: response.status };
};
