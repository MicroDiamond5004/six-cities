import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageOfferProcess } from '../../../types/state';
import { NameSpace } from '../../../const';
import { PageOffer } from '../../../types/type-offers';
import { PageComment } from '../../../types/comment';

const initialState: PageOfferProcess = {
    pageOffer: [],
    comments: [],
}

export const pageOfferProcess = createSlice({
    name: NameSpace.PageOffer,
    initialState,
    reducers: {
        changePageOffer: (state, action: PayloadAction<PageOffer[]>) => {
              state.pageOffer = action.payload;
        },
        changeComments: (state, action: PayloadAction<PageComment[]>) => {
              state.comments = action.payload;
        },
        addComment: (state, action: PayloadAction<PageComment>) => {
              state.comments = [action.payload, ...state.comments];
        }
    }
})

export const {changeComments, changePageOffer, addComment} = pageOfferProcess.actions;
