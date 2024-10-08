import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/type-offers';
import { loadOffers, requireAuthotization, setError } from './action';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken } from '../components/service/token';
import { removeToken } from '../services/token';
import { store } from '.';


export const clearErrorAction = createAsyncThunk(
    'data/clearError',
    () => {
        setTimeout(
            () => store.dispatch(setError(null)),
            TIMEOUT_SHOW_ERROR
        );
    },
)

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffers',
    async (_arg, {dispatch, extra: api}) => {
        const {data} = await api.get<Offer[]>('/offers')
        dispatch(loadOffers(data));
    }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
        try {
            await api.get(APIRoute.Offers);
            dispatch(requireAuthotization(AuthorizationStatus.Auth));
        } catch {
            dispatch(requireAuthotization(AuthorizationStatus.NoAuth))
        }
    },
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
        const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(token);
        dispatch(requireAuthotization(AuthorizationStatus.Auth));
    },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/login',
    async (_arg, {dispatch, extra: api}) => {
         await api.delete(APIRoute.Logout);
        removeToken();
        dispatch(requireAuthotization(AuthorizationStatus.NoAuth));
    },
);