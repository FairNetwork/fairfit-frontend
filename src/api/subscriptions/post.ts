import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { User } from '../../types/user';
import { IGym } from '../../types/gym';

interface PostSubscriptionBody {
    abonnementName: string;
    user: User;
}

interface PostSubscriptionOptions extends PostSubscriptionBody {
    internalId: IGym['internalId'];
}

export const postSubscription = async ({
    user,
    abonnementName,
    internalId
}: PostSubscriptionOptions): Promise<ApiFunctionResult> => {
    const body: PostSubscriptionBody = {
        abonnementName,
        user
    };

    const response = await request({
        body,
        method: 'POST',
        route: `mail/${internalId}`
    });

    return { status: response.status };
};
