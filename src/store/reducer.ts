import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeOffer, changeSortOffers, createListOfOffers } from './action';
import { Offer } from '../types/type-offers';
import { offersCityLocations } from '../components/pages/welcome-page/cities-component/cities-component';
import { SortTypes } from '../const';
import { sortByHighPrice, sortByHighRating, sortByLowPrice } from './sort-functions/sort-functions';


type InitialStateProps = {
  city: string;
  listOfOffers: Offer[];
  currentOffer: Offer;
  sortOffers: Offer[];
}

const initialState: InitialStateProps = {
  city: 'Paris',
  listOfOffers: offersCityLocations.Paris,
  currentOffer: offersCityLocations.Paris[0],
  sortOffers: offersCityLocations.Paris,
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
    })
    .addCase(changeOffer, (state, action) => {
      const currentOffer = action.payload;
      state.currentOffer = currentOffer;
    })
    .addCase(changeSortOffers, (state, action) => {
      const currentType = action.payload;
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
    });
});

export {reducer};
