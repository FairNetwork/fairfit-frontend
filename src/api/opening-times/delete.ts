import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

export const deleteSocialMedia = async (id: string): Promise<ApiFunctionResult<boolean>> => {
    const response = await request<boolean>({
        method: 'DELETE',
        route: `socialmedia/${id}`
    });

    return { status: response.status };
};
