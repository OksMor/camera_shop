import { appProcess, createReviewsList, resetReviewsList } from './app-process';
import { MAX_REVIEW_COUNT } from '../../const';

describe('Reducer: appProcess', () => {

  it('without additional parameters should return initial state', () => {
    expect(appProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({ reviewsOpen: MAX_REVIEW_COUNT });
  });

  describe('appProcess test', () => {

    it('createReviewsList', () => {
      expect(appProcess.reducer({ reviewsOpen: MAX_REVIEW_COUNT }, createReviewsList()))
        .toEqual({ reviewsOpen: MAX_REVIEW_COUNT + MAX_REVIEW_COUNT });
    });

    it('resetReviewsList', () => {
      expect(appProcess.reducer({ reviewsOpen: MAX_REVIEW_COUNT }, resetReviewsList()))
        .toEqual({ reviewsOpen: MAX_REVIEW_COUNT });
    });
  });

});
