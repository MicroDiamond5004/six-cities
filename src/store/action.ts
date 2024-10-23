import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/type-offers';
import { AppRoute, AuthorizationStatus } from '../const';


export const changeCity = createAction<string>('locations/changeCity');
export const createListOfOffers = createAction<Offer[]>('locations/createListOfOffers');
export const changeOffer = createAction<Offer>('locations/changeOffer');
export const changeSortOffers = createAction<string>('locations/changeSortOffers');
export const loadOffers = createAction<Offer[]>('data/loadOffers');
export const requireAuthotization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const changeSortType = createAction<string>('locations/changeSortType');
export const setLoadStatus = createAction<boolean>('data/setLoadStatus');
export const setError = createAction<string | null>('data/error');
export const redirectToRoute = createAction<AppRoute>('locations/redirectToRoute');
