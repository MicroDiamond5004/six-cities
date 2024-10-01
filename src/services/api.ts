import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken } from './token';
import { StatusCodes } from 'http-status-codes';
import { processErrorHandler } from './process-error-handle';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
    type: string;
    message: string;
}

const StatusCodeMaping: Record<number, boolean> = {
    [StatusCodes.BAD_REQUEST]: true,
    [StatusCodes.UNAUTHORIZED]: true,
    [StatusCodes.NOT_FOUND]: true,
}

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMaping[response.status];

export const createAPI = () : AxiosInstance => {
    const api = axios.create({
        baseURL: BACKEND_URL,
        timeout: REQUEST_TIMEOUT,
    });
// T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=
    api.interceptors.request.use(
        (config) => {
            const token = getToken();

            if (token && config.headers) {
                config.headers['x-token'] = token;
            }

            return config;
        },
    );

    api.interceptors.response.use(
        (response) => response,
        (error: AxiosError<DetailMessageType>) => {
            if (error.response && shouldDisplayError(error.response)) {
                const detailMessage = (error.response.data);
    
                processErrorHandler(detailMessage.message);
            }
        }
    )

    return api;
};

