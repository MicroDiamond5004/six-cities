import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer } from '../types/type-offers';
import { loadOffers, requireAuthotization } from '../store/action';
import { AuthorizationStatus } from '../const';


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
            await api.get('/offers');
            dispatch(requireAuthotization(AuthorizationStatus.Auth));
        } catch {
            dispatch(requireAuthotization(AuthorizationStatus.NoAuth))
        }
    },
);