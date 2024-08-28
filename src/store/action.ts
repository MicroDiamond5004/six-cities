import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/type-offers';


export const changeCity = createAction<string>('locations/changeCity');
export const createListOfOffers = createAction<Offer[]>('locations/createListOfOffers');
export const changeOffer = createAction<Offer>('locations/changeOffer');
export const changeSortOffers = createAction<string>('locations/changeSortOffers')
