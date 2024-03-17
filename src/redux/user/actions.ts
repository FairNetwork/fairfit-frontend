import { AppDispatch, GetAppState } from '../store';
import { selectUser } from './selectors';
import { setSendOrderLoadingState } from './slice';

export const finishOrder =
    () =>
    async (dispatch: AppDispatch, getState: GetAppState): Promise<void> => {
        const state = getState();

        const user = selectUser(state);

        dispatch(setSendOrderLoadingState('pending'));

        // ToDo call request

        dispatch(setSendOrderLoadingState('successful'));
    };
