import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';
import { GetGymResult } from '../gym/get';

interface PostSignUpBody {
    name: string;
    email: string;
    password: string;
    emailRedirectTo: string;
}

export const postSignUp = async ({
    password,
    name,
    email,
    emailRedirectTo
}: PostSignUpBody): Promise<ApiFunctionResult> => {
    const body: PostSignUpBody = {
        email,
        name,
        password,
        emailRedirectTo
    };

    const response = await request({
        body,
        method: 'POST',
        route: `user/signup`
    });

    return { status: response.status };
};

export const postConfirmSignUp = async (
    token: string
): Promise<ApiFunctionResult<GetGymResult>> => {
    const response = await request<GetGymResult, { token: string }>({
        body: { token },
        method: 'POST',
        route: `user/confirm`
    });

    if (response.status === 200) {
        return { data: response.data, status: 200 };
    }

    return { status: response.status };
};
