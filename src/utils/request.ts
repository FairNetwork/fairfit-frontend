import { IS_DEVELOPMENT, IS_QA } from '../constants/environment';

let BASE_REST_PATH =
    IS_DEVELOPMENT || IS_QA
        ? 'https://fairfit-backend-qa-0794.onrender.com/'
        : 'https://fairfit-backend.onrender.com/';

const searchParams = new URLSearchParams(window.location.search);

const localRestDomain = searchParams.get('localRestDomain');

if (localRestDomain !== null && (IS_DEVELOPMENT || IS_QA)) {
    BASE_REST_PATH = `${localRestDomain}/rest/api/`;
}

interface RequestOptions<Body> {
    accessToken?: string;
    auth?: boolean;
    backendVersion?: string;
    body?: Body;
    contentType?: string | null;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    route?: string;
    url?: string;
    shouldSkipJSON?: boolean;
}

interface Meta {
    [key: string]: unknown;

    body?: BodyInit | null;
    method: string;
    url: string;
}

export interface RequestResult<Data = unknown> {
    [key: string]: unknown;

    data?: Data;
    error?: Error;
    meta: Meta;
    requestDuration?: number;
    retryAfter?: number;
    status?: number;
}

interface RequestOptions<Body> {
    accessToken?: string;
    auth?: boolean;
    backendVersion?: string;
    body?: Body;
    contentType?: string | null;
    method: 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH';
    route?: string;
    url?: string;
    shouldSkipJSON?: boolean;
}

export const request = async <Data = null, Body = null>({
    backendVersion,
    body,
    contentType = 'application/json',
    method,
    route = '',
    shouldSkipJSON = false,
    url = `${BASE_REST_PATH}${typeof backendVersion === 'string' ? backendVersion : ''}`
}: RequestOptions<Body>): Promise<RequestResult<Data>> => {
    const headers: HeadersInit = {};

    const requestData: RequestInit = {
        credentials: 'include',
        headers,
        method
    };

    if (method !== 'GET') {
        if (body) {
            requestData.body = body instanceof FormData ? body : JSON.stringify(body);
        }

        if (typeof contentType === 'string' && !(body instanceof FormData)) {
            headers['Content-Type'] = contentType;
        }
    }

    const result: RequestResult<Data> = {
        meta: {
            method,
            url: url + route,
            body: requestData.body
        }
    };

    const requestStart: number = Date.now();

    try {
        const response: Response = await fetch(url + route, requestData);

        result.requestDuration = Date.now() - requestStart;
        result.status = response.status;

        try {
            const dataString = await response.text();

            if (shouldSkipJSON) {
                // @ts-ignore
                result.data = dataString;
            } else {
                if (dataString && dataString.length > 0) {
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                    result.data = JSON.parse(dataString);
                }
            }
        } catch (error) {
            if (error) {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                result.error = error as Error;
            }
        }

        if (response.status === 429) {
            const retryAfterHeaderValue = response.headers.get('retry-after');

            if (retryAfterHeaderValue !== null) {
                let parsedRetryAfterValue;

                try {
                    parsedRetryAfterValue = parseInt(retryAfterHeaderValue, 10);

                    if (
                        typeof parsedRetryAfterValue === 'number' &&
                        !Number.isNaN(parsedRetryAfterValue)
                    ) {
                        result.retryAfter = parsedRetryAfterValue;
                    }
                } catch (error) {
                    if (error) {
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        result.error = error as Error;
                    }
                }
            }
        }
    } catch (error) {
        result.requestDuration = Date.now() - requestStart;

        if (error) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            result.error = error as Error;
        }
    }

    return result;
};
