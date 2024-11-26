import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { Offer, PageOffer } from '../types/type-offers';
import { addComment, changeComments, changeOffer, changePageOffer, loadOffers, redirectToRoute, requireAuthotization, setError } from './action';
import { APIRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { setToken } from '../services/token';
import { removeToken } from '../services/token';
import { store } from '.';
import { Comment, PageComment } from '../types/comment';


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

export const fetchOfferAction = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/fetchCurrentOffer',
    async(offerId, {dispatch, extra: api, getState}) => {
        try {
            const {data: offer} = await api.get<PageOffer>(`/offers/${offerId}`);
            dispatch(changePageOffer([offer]));
            const state = getState();
            const offerList: Offer | undefined = state.offers.find((offer) => offer.id === offer.id);
            if (offerList) {
                dispatch(changeOffer(offerList));
            }
        } catch {
            dispatch(redirectToRoute(AppRoute.Error));
        }
    },
);

export const loadComments = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postNewCommnet',
    async(offerId, {dispatch, extra: api}) => {
        const {data} = await api.get<PageComment[]>(`${APIRoute.Comments}/${offerId}`);
        dispatch(changeComments(data)); 
    }
)

export const postNewComment = createAsyncThunk<void, Comment, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postNewCommnet',
    async({offerId, comment, rating}, {dispatch, extra: api}) => {
        const {data} = await api.post<PageComment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
        dispatch(addComment(data));
    }
)

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/checkAuth',
    async (_arg, {dispatch, extra: api}) => {
        try {
            await api.get(APIRoute.Login);
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
        setToken(token);   
        dispatch(requireAuthotization(AuthorizationStatus.Auth));
        dispatch(redirectToRoute(AppRoute.Root));
    },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'user/logout',
    async (_arg, {dispatch, extra: api}) => {
        await api.delete(APIRoute.Logout);
        removeToken();
        dispatch(requireAuthotization(AuthorizationStatus.NoAuth));
    },
);