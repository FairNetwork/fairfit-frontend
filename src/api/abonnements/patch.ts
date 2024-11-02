import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { Offer } from '../../types/offer';

interface PatchAbonnementOptions {
    id?: Offer['id'];
    isOffer?: Offer['isOffer'];
    title?: Offer['title'];
    details?: { id?: string; detail: string }[];
    price?: Offer['price'];
    duration?: Offer['duration'] | null;
    priceAfterDuration?: Offer['priceAfterDuration'] | null;
}

export const patchAbonnement = async ({
    details,
    duration,
    priceAfterDuration,
    price,
    isOffer,
    title,
    id
}: PatchAbonnementOptions): Promise<ApiFunctionResult<Offer>> => {
    const body: PatchAbonnementOptions = {
        details,
        duration,
        isOffer,
        title,
        id,
        price,
        priceAfterDuration
    };

    const response = await request<Offer, PatchAbonnementOptions>({
        body,
        method: 'PATCH',
        route: `abonnements/${id}`
    });

    return { status: response.status, data: response.data };
};
