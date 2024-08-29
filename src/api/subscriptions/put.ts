import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils1/request';

export interface PatchSubscriptionBody {
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

export const putSubscription = async (
    body: PatchSubscriptionBody,
    gymId: string,
    subscriptionId: string
): Promise<ApiFunctionResult> => {
    const response = await request({
        body,
        method: 'PUT',
        route: `tenants/${gymId}/subscriptions/${subscriptionId}`
    });

    return { status: response.status, data: response.data };
};
