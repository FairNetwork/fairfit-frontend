import { ApiFunctionResult } from '../../types/api';
import { request } from '../../utils/request';

interface PostSignUpBody {
    name: string;
    email: string;
    password: string;
}

export const postSignUp = async ({
    password,
    name,
    email
}: PostSignUpBody): Promise<ApiFunctionResult> => {
    const body: PostSignUpBody = {
        email,
        name,
        password
    };

    const response = await request({
        body,
        method: 'POST',
        route: `user/signup`
    });

    return { status: response.status };
};
