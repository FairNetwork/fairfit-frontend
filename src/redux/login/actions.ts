import { AppDispatch, GetAppState } from '../store';
import { postSignUp } from '../../api/login/post';

interface RegisterStudioOptions {
    name: string;
    email: string;
    password: string;
}

export const registerStudio =
    ({ password, name, email }: RegisterStudioOptions) =>
    async (_: AppDispatch, __: GetAppState): Promise<boolean> => {
        const { status } = await postSignUp({ name, email, password });

        return status === 200;
    };
