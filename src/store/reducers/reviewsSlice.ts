import { configureStore, createSlice } from "@reduxjs/toolkit";
import { IReview } from "@/interfaces/interfaz";
export interface ReviewsStates {
  data: IReview[];
}

const initialState: ReviewsStates = {
  data: [],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    createReviews: (state, action) => {
      state.data.push(action.payload);
    },
    readReviews: (state, action) => {
      state.data = state.data.concat(action.payload);
    },
    clearReviews: (state) => {
      state.data = [];
    },
    updateReviews: (state, action) => {},
    deleteReviews: (state, action) => {},
  },
});

export const {
  createReviews,
  readReviews,
  clearReviews,
  updateReviews,
  deleteReviews,
} = reviewsSlice.actions;

export default reviewsSlice.reducer;
