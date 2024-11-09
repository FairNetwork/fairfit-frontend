export interface ApiFunctionResult<T = null, E = null> {
    data?: T;
    error?: Error;
    errorCode?: number;
    errorData?: E;
    errorMessage?: string;
    retryAfter?: number;
    status?: number;
}
