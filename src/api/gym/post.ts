import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils1/request';

export const postSendMail = async (mail: string, gymId: string): Promise<ApiFunctionResult> => {
    const response = await request({
        method: 'POST',
        body: mail,
        contentType: 'text/plain',
        route: `tenants/${gymId}/email`
    });

    return { status: response.status, data: response.data };
};
