import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer, PageOffer } from '../types/type-offers';
import { APIRoute, AppRoute, NameSpace, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { setToken } from '../services/token';
import { removeToken } from '../services/token';
import { store } from '.';
// import { redirectToRoute, setError } from './slices/main-offers-process/main-offers-process.slice';
// import { changePageOffer } from './slices/page-offer-process/page-offer-process.slice';


export const fetchOffersAction = createAsyncThunk<Offer[], undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchOffers',
    async (_arg, {extra: api}) => {
        try {
            const {data} = await api.get<Offer[]>('/offers');
            return data;
        } catch {
            throw new Error('No Offers');
        }
    }
);

export const clearErrorAction = createAsyncThunk(
    'data/clearError',
    () => {},
)

export const fetchOfferAction = createAsyncThunk<null | PageOffer, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchCurrentOffer',
    async(offerId, {extra: api}) => {
        try {
            const {data: offer} = await api.get<PageOffer>(`/offers/${offerId}`);
            return offer;
        } catch {
            return null;
        }
    },
);  

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/checkAuth',
    async (_arg, {extra: api}) => {
        await api.get(APIRoute.Login)
    }
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/login',
    async ({login: email, password}, {extra: api}) => {
        const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
        setToken(token);
    },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/logout',
    async (_arg, {extra: api}) => {
        await api.delete(APIRoute.Logout);
        removeToken();
    },
);
