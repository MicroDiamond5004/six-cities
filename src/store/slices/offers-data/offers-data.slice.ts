import { clearErrorAction, fetchOfferAction, fetchOffersAction, loginAction } from '../../api-actions';
import { createSlice } from '@reduxjs/toolkit';
import { OffersData } from '../../../types/state';
import { AppRoute, NameSpace } from '../../../const';
import { Navigate } from 'react-router-dom';
import { Offer } from '../../../types/type-offers';


const initialState: OffersData = {
    offers: [],
    currentOffer: null,
    loadStatus: false,
    pageOffer: [],
    error: null,
}

export const offersData = createSlice({
    name: NameSpace.Data,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchOffersAction.pending, (state) => {
                state.loadStatus = true;
            })
            .addCase(fetchOffersAction.fulfilled, (state, action) => {
                state.offers = action.payload;
                state.currentOffer = action.payload[0];
                state.loadStatus = false;
            })
            .addCase(fetchOfferAction.pending, (state) => {
                state.loadStatus = true;
            })
            .addCase(fetchOfferAction.fulfilled, (state, action) => {
                if (action.payload) {
                    state.pageOffer = [action.payload];
                    const curerentOffer: Offer | undefined = state.offers.find((offer) => offer.id === offer.id);
                    if (curerentOffer) {
                        state.currentOffer = curerentOffer;
                    }
                } else {
                    Navigate({to: AppRoute.Error});
                }
                
                state.loadStatus = false;
            })
            .addCase(loginAction.fulfilled, (_state) => {
                Navigate({to: AppRoute.Root});
            })
            .addCase(clearErrorAction.fulfilled, (state) => {
                state.error = null
            })
    },
})