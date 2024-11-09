import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { GymUpdate, IGym } from '../../types/gym';

export const patchGym = async (
    update: Partial<GymUpdate>,
    id: string,
    file?: File
): Promise<ApiFunctionResult<Partial<IGym>>> => {
    const formData = new FormData();

    Object.keys(update).forEach((key) => {
        const value = update[key as keyof GymUpdate];

        if (value !== undefined) {
            if (typeof value === 'string' || typeof value === 'number') {
                formData.append(key, value.toString());
            } else if (Array.isArray(value)) {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, JSON.stringify(value));
            }
        }
    });

    if (file) {
        formData.append('file', file);
    }

    const response = await request<Partial<IGym>, FormData>({
        method: 'PATCH',
        body: formData,
        route: `gyms/${id}`
    });

    return { status: response.status, data: response.data };
};
