import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, changePageOffer, changeSortOffers, changeSortType, createListOfOffers, loadOffers, requireAuthotization, setError, setLoadStatus } from './action';
import { Offer, PageOffer } from '../types/type-offers';
import { offersCityLocations } from '../components/pages/welcome-page/cities-component/cities-component';
import { AuthorizationStatus, SortTypes } from '../const';
import { sortByHighPrice, sortByHighRating, sortByLowPrice } from './sort-functions/sort-functions';


type InitialStateProps = {
  city: string;
  listOfOffers: Offer[];
  sortOffers: Offer[]
  offers: Offer[];
  pageOffer: PageOffer[];
  currentOffer: Offer | null;
  authorizationStatus: AuthorizationStatus;
  sortType: string;
  loadStatus: boolean;
  error: string | null;
  favoriteCount: number,
}

const initialState: InitialStateProps = {
  city: 'Paris',
  listOfOffers: [],
  sortOffers: [],
  pageOffer: [],
  offers: [],
  currentOffer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  sortType: SortTypes.Popular,
  loadStatus: false,
  error: null,
  favoriteCount: 15,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const currentCity = String(action.payload);
      state.city = currentCity;
    })
    .addCase(createListOfOffers, (state, action) => {
      const currentOffers = action.payload;
      state.currentOffer = currentOffers[0];
      state.listOfOffers = currentOffers;
      state.sortOffers = currentOffers;
    })
    .addCase(changeOffer, (state, action) => {
      const currentOffer = action.payload;
      state.currentOffer = currentOffer;
    })
    .addCase(changePageOffer, (state, action) => {
      const currentOffer = action.payload;
      state.pageOffer = currentOffer;
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
      state.currentOffer = action.payload[0];
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
