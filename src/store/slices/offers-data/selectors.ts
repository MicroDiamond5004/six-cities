import { NameSpace } from '../../../const';
import { State } from '../../../types/state';
import { Offer } from '../../../types/type-offers';

export const getOffers = (state: State): Offer[] => state[NameSpace.Data].offers;
export const getLoadStatus = (state: State): boolean => state[NameSpace.Data].loadStatus;