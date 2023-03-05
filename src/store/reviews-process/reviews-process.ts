import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsAction } from '../api-action';
import { ReviewsState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ReviewsState = {
  reviews: [],
  isLoading: true,
};

export const reviewsProcess = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
