import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { offersData } from './slices/offers-data/offers-data.slice';
import { mainOffersProcess } from './slices/main-offers-process/main-offers-process.slice';
import { pageOfferProcess } from './slices/page-offer-process/page-offer-process.slice';
import { userProcess } from './slices/user-process/user-process.slice';

export const rootReducer = combineReducers({
    [NameSpace.Data]: offersData.reducer,
    [NameSpace.MainOffers]: mainOffersProcess.reducer,
    [NameSpace.PageOffer]: pageOfferProcess.reducer,
    [NameSpace.User]: userProcess.reducer,
})
