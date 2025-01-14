import { AxiosInstance } from "axios";
import { AppDispatch, State } from "../../../../types/state";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Comment, PageComment } from "../../../../types/comment";
import { APIRoute } from "../../../../const";
import { addComment, changeComments } from "../../../../store/slices/page-offer-process/page-offer-process.slice";

export const loadComments = createAsyncThunk<void, string, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postNewCommnet',
    async(offerId, {dispatch, extra: api}) => {
        const {data} = await api.get<PageComment[]>(`${APIRoute.Comments}/${offerId}`);
        dispatch(changeComments(data));
    }
)

export const postNewComment = createAsyncThunk<void, Comment, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
    'data/postNewCommnet',
    async({offerId, comment, rating}, {dispatch, extra: api}) => {
        const {data} = await api.post<PageComment>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
        dispatch(addComment(data));
    }
)