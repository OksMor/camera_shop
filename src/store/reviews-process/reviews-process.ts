import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsAction } from '../api-action';
import { ReviewState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: ReviewState = {
  review: [],
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
        state.review = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
