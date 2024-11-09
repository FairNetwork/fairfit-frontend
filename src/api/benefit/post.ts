import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IBenefit } from '../../types/benefit';

export const postBenefit = async (
    internalId: string,
    file: File
): Promise<ApiFunctionResult<IBenefit>> => {
    const formData = new FormData();

    formData.append('file', file);

    const response = await request<IBenefit, FormData>({
        body: formData,
        method: 'POST',
        contentType: null,
        route: `benefit/${internalId}`
    });

    return { status: response.status, data: response.data };
};
