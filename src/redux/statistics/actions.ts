import { selectCurrentGymId } from '../gym/selectors';
import { AppDispatch, GetAppState } from '../store';
import { setRequestsStatistics } from './slice';
import { getRequestStatistics } from '../../api/statistics/get';

export const loadRequestStatistics =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        // dispatch(setGymLoadingState('pending'));

        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await getRequestStatistics(currentGymId);

        if (status === 200 && data) {
            dispatch(setRequestsStatistics(data.id));
            // dispatch(setGymLoadingState('successful'));

            return;
        }

        // dispatch(setGymLoadingState('rejected'));

        return;
    };
