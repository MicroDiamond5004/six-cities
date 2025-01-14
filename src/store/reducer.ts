// import { createReducer } from '@reduxjs/toolkit';
// import { addComment, changeCity, changeComments, changeOffer, changePageOffer, changeSortOffers, changeSortType, createListOfOffers, loadOffers, requireAuthotization, setError, setLoadStatus } from './action';
// import { Offer, PageOffer } from '../types/type-offers';
// import { SortTypes } from '../const';
// import { sortByHighPrice, sortByHighRating, sortByLowPrice } from './sort-functions/sort-functions';
// import { PageComment } from '../types/comment';


// type InitialStateProps = {
//   city: string;
//   listOfOffers: Offer[];
//   sortOffers: Offer[]
//   offers: Offer[];
//   pageOffer: PageOffer[];
//   currentOffer: Offer | null;
//   sortType: string;
//   loadStatus: boolean;
//   error: string | null;
//   favoriteCount: number;
//   comments: PageComment[];
// }

// const initialState: InitialStateProps = {
//   city: 'Paris',
//   listOfOffers: [],
//   sortOffers: [],
//   pageOffer: [],
//   offers: [],
//   currentOffer: null,
//   sortType: SortTypes.Popular,
//   loadStatus: false,
//   error: null,
//   favoriteCount: 15,
//   comments: [],
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       const currentCity = String(action.payload);
//       state.city = currentCity;
//     })
//     .addCase(createListOfOffers, (state, action) => {
//       const currentOffers = action.payload;
//       state.currentOffer = currentOffers[0];
//       state.listOfOffers = currentOffers;
//       state.sortOffers = currentOffers;
//     })
//     .addCase(changeOffer, (state, action) => {
//       const currentOffer = action.payload;
//       state.currentOffer = currentOffer;
//     })
//     .addCase(changePageOffer, (state, action) => {
//       const currentOffer = action.payload;
//       state.pageOffer = currentOffer;
//     })
//     .addCase(changeSortOffers, (state, action) => {
//       const currentType = action.payload;
//       if (state.sortOffers) {
//         switch (currentType) {
//           case SortTypes.High_Price:
//             state.sortOffers = state.sortOffers.sort(sortByHighPrice);
//             break;
//           case SortTypes.Low_Price:
//             state.sortOffers = state.sortOffers.sort(sortByLowPrice);
//             break;
//           case SortTypes.High_Rating:
//             state.sortOffers = state.sortOffers.sort(sortByHighRating);
//             break;
//           case SortTypes.Popular:
//             state.sortOffers = state.listOfOffers;
//             break
//           default:
//             break;
//         }
//       }
//     })
//     .addCase(loadOffers, (state, action) => {
//       state.offers = action.payload;
//       state.currentOffer = action.payload[0];
//       state.loadStatus = true;
//     })
//     .addCase(changeSortType, (state, action) => {
//       state.sortType = action.payload;
//     })
//     .addCase(setLoadStatus, (state, action) => {
//       state.loadStatus = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     .addCase(changeComments, (state, action) => {
//       state.comments = action.payload;
//     })
//     .addCase(addComment, (state, action) => {
//       state.comments = [action.payload, ...state.comments];
//     })
// });

// export {reducer};
