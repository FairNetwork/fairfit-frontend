import { AppDispatch, GetAppState } from '../store';
import { postSignUp } from '../../api/login/post';
import { IS_PRODUCTION, IS_QA } from '../../constants/environment';

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
