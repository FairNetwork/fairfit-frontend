import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { IGym } from '../../types/gym';
import { IOpeningTimes } from '../../types/openingTimes';

interface PostOpeningTimeOptions {
    gymId: IGym['internalId'];
    endTime: IOpeningTimes['endTime'];
    startTime: IOpeningTimes['startTime'];
    type: IOpeningTimes['type'];
    id: IOpeningTimes['id'];
    closed: IOpeningTimes['closed'];
}

export const postOpeningTime = async ({
    type,
    endTime,
    startTime,
    id,
    gymId,
    closed
}: PostOpeningTimeOptions): Promise<ApiFunctionResult<IOpeningTimes>> => {
    const body: IOpeningTimes = {
        endTime,
        startTime,
        closed,
        id,
        type
    };

    const response = await request<IOpeningTimes, IOpeningTimes>({
        body,
        method: 'POST',
        route: `openingtimes/${gymId}`
    });

    return { status: response.status, data: response.data };
};
