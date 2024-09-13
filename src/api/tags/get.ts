import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { ITag } from '../../types/tag';

export const getTags = async (): Promise<ApiFunctionResult<ITag[]>> => {
    const response = await request<ITag[]>({
        method: 'GET',
        route: `filter`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
