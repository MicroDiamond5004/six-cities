import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, changeSortOffers, changeSortType, createListOfOffers, loadOffers, requireAuthotization, setError, setLoadStatus } from './action';
import { Offer } from '../types/type-offers';
import { offersCityLocations } from '../components/pages/welcome-page/cities-component/cities-component';
import { AuthorizationStatus, SortTypes } from '../const';
import { sortByHighPrice, sortByHighRating, sortByLowPrice } from './sort-functions/sort-functions';


type InitialStateProps = {
  city: string;
  listOfOffers: Offer[];
  currentOffer: Offer;
  sortOffers: Offer[] | null;
  offers: Offer[] | null;
  authorizationStatus: AuthorizationStatus;
  sortType: string;
  loadStatus: boolean;
  error: string | null;
}

const initialState: InitialStateProps = {
  city: 'Paris',
  listOfOffers: offersCityLocations.Paris,
  currentOffer: offersCityLocations.Paris[0],
  sortOffers: null,
  offers: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  sortType: 'Popular',
  loadStatus: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const currentCity = String(action.payload);
      state.city = currentCity;
    })
    .addCase(createListOfOffers, (state, action) => {
      const currentOffers = action.payload;
      state.listOfOffers = currentOffers;
      state.sortOffers = currentOffers;
      state.currentOffer = currentOffers[0];
    })
    .addCase(changeOffer, (state, action) => {
      const currentOffer = action.payload;
      state.currentOffer = currentOffer;
    })
    .addCase(changeSortOffers, (state, action) => {
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
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.loadStatus = true;
    })
    .addCase(requireAuthotization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setLoadStatus, (state, action) => {
      state.loadStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
});

export {reducer};
