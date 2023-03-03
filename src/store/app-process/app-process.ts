import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '../../types/state';
import { MAX_REVIEW_COUNT, NameSpace } from '../../const';

const initialState: AppState = {
  reviewsOpen: MAX_REVIEW_COUNT
};

export const appProcess = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {
    createReviewsList: (state) => {
      state.reviewsOpen += MAX_REVIEW_COUNT;
    },
    resetReviewsList: (state) => {
      state.reviewsOpen = MAX_REVIEW_COUNT;
    },
  },
});

export const { createReviewsList, resetReviewsList} = appProcess.actions;
