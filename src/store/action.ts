import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/type-offers';


export const changeCity = createAction('locations/changeCity');
export const createListOfOffers = createAction<Offer[]>('locations/createListOfOffers');
