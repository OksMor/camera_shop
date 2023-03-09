import { fetchReviewsAction } from '../api-action';
import { reviewsProcess } from './reviews-process';
import { Review } from '../../types/types';
import { ReviewsState } from '../../types/state';
import { mockReviews } from '../../mocks/mocks';

const reviews: Review[] = mockReviews();

describe('Reducer: reviewsProcess', () => {
  let state: ReviewsState;

  beforeEach(() => {
    state = {reviews: [], isLoading: true};
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewsProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({reviews: [], isLoading: true});
  });

  describe('reviewsProcess test', () => {
    it('fetchReviewsAction pending', () => {
      expect(reviewsProcess.reducer(state, {type: fetchReviewsAction.pending.type, payload: reviews}))
        .toEqual({isLoading: true, reviews: []});
    });

    it('fetchReviewsAction fulfilled', () => {
      expect(reviewsProcess.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: reviews}))
        .toEqual({isLoading: false, reviews: reviews});
    });

    it('fetchReviewsAction rejected', () => {
      expect(reviewsProcess.reducer(state, {type: fetchReviewsAction.rejected.type, payload: reviews}))
        .toEqual({isLoading: false, reviews: []});
    });
  });

});
