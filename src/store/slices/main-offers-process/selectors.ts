import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getCity = (state: State) => state[NameSpace.MainOffers].city;
export const getListOfOffers = (state: State) => state[NameSpace.MainOffers].listOfOffers;
export const getSortOffers = (state: State) => state[NameSpace.MainOffers].sortOffers;
export const getOffers = (state: State) => state[NameSpace.MainOffers].offers;
export const getCurrentOffer = (state: State) => state[NameSpace.MainOffers].currentOffer;
export const getSortType = (state: State) => state[NameSpace.MainOffers].sortType;
export const getError = (state: State) => state[NameSpace.MainOffers].error;
export const getFavoriteCount = (state: State) => state[NameSpace.MainOffers].favoriteCount;