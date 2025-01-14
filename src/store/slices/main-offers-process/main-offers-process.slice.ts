import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppRoute, NameSpace, SortTypes } from '../../../const';
import { MainOffersProcess } from '../../../types/state';
import { Offer } from '../../../types/type-offers';
import { sortByHighPrice, sortByHighRating, sortByLowPrice } from '../../sort-functions/sort-functions';
import { Navigate } from 'react-router-dom';

const initialState: MainOffersProcess = {
    city: 'Paris',
    listOfOffers: [],
    sortOffers: [],
    offers: [],
    currentOffer: null,
    sortType: SortTypes.Popular,
    error: null,
    favoriteCount: 15,
}

export const mainOffersProcess = createSlice({
    name: NameSpace.MainOffers,
    initialState,
    reducers: {
        changeCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        createListOfOffers: (state, action: PayloadAction<Offer[]>) => {
            const currentOffers = action.payload;
            state.currentOffer = currentOffers[0];
            state.listOfOffers = currentOffers;
            state.sortOffers = currentOffers;
        },
        changeSortOffers: (state, action: PayloadAction<string>) => {
            const currentType = action.payload;
            if (state.sortOffers) {
                switch (currentType) {
                    case SortTypes.High_Price:
                    state.sortOffers = state.sortOffers.sort(sortByHighPrice);
                    break;
                    case SortTypes.Low_Price:
                    state.sortOffers = state.sortOffers.sort(sortByLowPrice);
                    break;
                    case SortTypes.High_Rating:
                    state.sortOffers = state.sortOffers.sort(sortByHighRating);
                    break;
                    case SortTypes.Popular:
                    state.sortOffers = state.listOfOffers;
                    break
                    default:
                    break;
                }
            }
        },
        changeSortType: (state, action: PayloadAction<string>) => {
            state.sortType = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        changeOffer: (state, action: PayloadAction<Offer>) => {
            const currentOffer = action.payload;
            state.currentOffer = currentOffer;
        },
        redirectToRoute: (_state, action: PayloadAction<AppRoute>) =>{
            Navigate({to: action.payload});
        }
    }
})

export const {changeCity, changeSortOffers, changeSortType, createListOfOffers, changeOffer, setError, redirectToRoute} = mainOffersProcess.actions;