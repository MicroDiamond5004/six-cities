import { NameSpace } from '../../../const';
import { State } from '../../../types/state';

export const getPageOffer = (state: State) => state[NameSpace.PageOffer].pageOffer;
export const getComments = (state: State) => state[NameSpace.PageOffer].comments;