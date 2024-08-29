import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils1/request';

export interface PostSubscriptionBody {
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    street?: string;
    number?: number;
    place?: string;
    postcode?: string;
    birthday?: Date;
    iban?: string;
    owner?: string;
    selectedOfferId?: string;
    selectedOfferName?: string;
}

export const postSubscription = async (
    body: PostSubscriptionBody,
    gymId: string
): Promise<ApiFunctionResult> => {
    const response = await request({
        body,
        shouldSkipJSON: true,
        method: 'POST',
        route: `tenants/${gymId}/subscriptions`
    });

    return { status: response.status, data: response.data };
};

export const postSendSubscription = async (
    subscriptionId: string,
    gymId: string
): Promise<ApiFunctionResult> => {
    const response = await request({
        method: 'POST',
        route: `tenants/${gymId}/subscriptions/${subscriptionId}`
    });

    return { status: response.status, data: response.data };
};
