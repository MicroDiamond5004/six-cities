import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { PageComment } from './comment';
import { Offer, PageOffer } from './type-offers';

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
}

export type OffersData = {
    offers: Offer[];
    currentOffer: Offer | null;
    loadStatus: boolean;
    pageOffer: PageOffer[];
    error: string | null;
}

export type MainOffersProcess = {
    city: string;
    listOfOffers: Offer[];
    sortOffers: Offer[]
    offers: Offer[];
    currentOffer: Offer | null;
    sortType: string;
    error: string | null;
    favoriteCount: number;
}

export type PageOfferProcess = {
    pageOffer: PageOffer[];
    comments: PageComment[]
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
