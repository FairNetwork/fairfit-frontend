import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { Offer } from '../../types/offer';
import { IGym } from '../../types/gym';

interface PostAbonnementBody {
    id?: Offer['id'];
    isOffer?: Offer['isOffer'];
    title?: Offer['title'];
    details?: { id?: string; detail: string }[];
    price?: Offer['price'];
    duration?: Offer['duration'] | null;
    priceAfterDuration?: Offer['priceAfterDuration'] | null;
}

interface PostAbonnementOptions extends PostAbonnementBody {
    gymId: IGym['internalId'];
}

export const postAbonnement = async ({
    details,
    duration,
    priceAfterDuration,
    price,
    isOffer,
    title,
    id,
    gymId
}: PostAbonnementOptions): Promise<ApiFunctionResult<Offer>> => {
    const body: PostAbonnementBody = {
        details,
        duration,
        isOffer,
        title,
        id,
        price,
        priceAfterDuration
    };

    const response = await request<Offer, PostAbonnementBody>({
        body,
        method: 'POST',
        route: `abonnements/${gymId}`
    });

    return { status: response.status, data: response.data };
};
