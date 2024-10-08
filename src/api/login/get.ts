import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

export const getIsLoggedIn = async (): Promise<ApiFunctionResult<boolean>> => {
    const response = await request<boolean>({
        method: 'GET',
        route: `user/isLoggedIn`
    });

    return { status: response.status };
};
