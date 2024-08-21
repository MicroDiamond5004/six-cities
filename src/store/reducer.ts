import { createReducer } from '@reduxjs/toolkit';
import { changeCity, createListOfOffers } from './action';
import { Offer } from '../types/type-offers';


type InitialStateProps = {
  city: string;
  listOfOffers: Offer[];
}

const initialState: InitialStateProps = {
  city: '',
  listOfOffers: [],
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
    });
});

export {reducer};
