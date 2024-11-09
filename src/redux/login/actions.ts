import { AppDispatch, GetAppState } from '../store';
import { postConfirmSignUp, postSignIn, postSignUp } from '../../api/login/post';
import { IS_PRODUCTION, IS_QA } from '../../constants/environment';
import { extractAccessToken } from '../../utils/routes';
import { addGym, setGymLoadingState } from '../gym/slice';
import { getIsLoggedIn } from '../../api/login/get';
import { setIsLoggedIn } from './slice';

interface RegisterStudioOptions {
    name: string;
    email: string;
    password: string;
}

export const registerStudio =
    ({ password, name, email }: RegisterStudioOptions) =>
    async (_: AppDispatch, __: GetAppState): Promise<boolean> => {
        let emailRedirectTo = `http://localhost:3001/${name.toLowerCase().replaceAll(' ', '_')}/dashboard`;

        if (IS_QA) {
            emailRedirectTo = `https://qa.fairfit.net/${name.toLowerCase().replaceAll(' ', '_')}/dashboard`;
        } else if (IS_PRODUCTION) {
            emailRedirectTo = `https://fairfit.net/${name.toLowerCase().replaceAll(' ', '_')}/dashboard`;
        }

        const { status } = await postSignUp({ name, email, password, emailRedirectTo });

        return status === 200;
    };

interface LogInStudioOptions {
    email: string;
    password: string;
    remember: boolean;
}

export const logInStudio =
    ({ password, email, remember }: LogInStudioOptions) =>
    async (dispatch: AppDispatch, __: GetAppState): Promise<boolean> => {
        const { status } = await postSignIn({ email, password, remember });

        dispatch(setIsLoggedIn(status === 200));

        return status === 200;
    };

export const getIsUserLoggedIn =
    () =>
    async (dispatch: AppDispatch, __: GetAppState): Promise<void> => {
        const { status } = await getIsLoggedIn();

        dispatch(setIsLoggedIn(status === 200));
    };

export const confirmRegistration =
    () =>
    async (dispatch: AppDispatch, __: GetAppState): Promise<void> => {
        const token = extractAccessToken();

        if (!token) {
            return;
        }

        const { status, data } = await postConfirmSignUp(token);

        if (status === 200 && data) {
            dispatch(setIsLoggedIn(true));
            dispatch(addGym([data]));
            dispatch(setGymLoadingState('successful'));

            return;
        }

        dispatch(setGymLoadingState('rejected'));
    };
