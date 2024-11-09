import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

export const deleteAbonnement = async (id: string): Promise<ApiFunctionResult<boolean>> => {
    const response = await request<boolean>({
        method: 'DELETE',
        route: `abonnements/${id}`
    });

    return { status: response.status };
};
