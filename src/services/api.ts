import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

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

    return api;
};
