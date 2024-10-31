import { selectCurrentGymId } from '../gym/selectors';
import { AppDispatch, GetAppState } from '../store';
import { setStatistics } from './slice';
import { getStatistics } from '../../api/statistics/get';

export const loadStatistics =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const currentGymId = selectCurrentGymId(state);

        if (!currentGymId) {
            return;
        }

        const { status, data } = await getStatistics(currentGymId);

        if (status === 200 && data) {
            dispatch(setStatistics(data));

            return;
        }

        return;
    };
