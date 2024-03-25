import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

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
        method: 'POST',
        route: `tenants/${'062f64f2-35c7-424b-89bc-8a00f5a8b0c0'}/subscriptions`
    });

    return { status: response.status, data: response.data };
};

export const postSendSubscription = async (
    subscriptionId: string,
    gymId: string
): Promise<ApiFunctionResult> => {
    const response = await request({
        method: 'POST',
        route: `tenants/${'062f64f2-35c7-424b-89bc-8a00f5a8b0c0'}/subscriptions/${subscriptionId}`
    });

    return { status: response.status, data: response.data };
};
