import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

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

export const patchSubscription = async (
    body: PatchSubscriptionBody,
    gymId: string,
    subscriptionId: string
): Promise<ApiFunctionResult> => {
    const response = await request({
        body,
        method: 'PATCH',
        route: `tenants/${'062f64f2-35c7-424b-89bc-8a00f5a8b0c0'}/subscriptions/${subscriptionId}`
    });

    return { status: response.status, data: response.data };
};
