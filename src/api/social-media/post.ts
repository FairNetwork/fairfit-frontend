import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IGym } from '../../types/gym';
import { ISocialMedia } from '../../types/socialMedia';

interface PostSocialMediaOptions {
    gymId: IGym['internalId'];
    type: ISocialMedia['type'];
    id: ISocialMedia['id'];
    userName: ISocialMedia['userName'];
}

export const postSocialMedia = async ({
    type,
    id,
    userName,
    gymId
}: PostSocialMediaOptions): Promise<ApiFunctionResult<ISocialMedia>> => {
    const body: ISocialMedia = {
        id,
        userName,
        type
    };

    const response = await request<ISocialMedia, ISocialMedia>({
        body,
        method: 'POST',
        route: `socialmedia/${gymId}`
    });

    return { status: response.status, data: response.data };
};
