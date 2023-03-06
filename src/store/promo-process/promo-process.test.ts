import { fetchPromoAction } from '../api-action';
import { promoProcess } from './promo-process';
import { Promo } from '../../types/types';
import { PromoState } from '../../types/state';
import { mockPromoCamera } from '../../mocks/mocks';

const promo: Promo = mockPromoCamera();

describe('Reducer: promoProcess', () => {
  let state: PromoState;

  beforeEach(() => {
    state = {promo: null, isLoading: true};
  });

  it('without additional parameters should return initial state', () => {
    expect(promoProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({promo: null, isLoading: true});
  });

  describe('promoProcess test', () => {
    it('fetchPromoAction pending', () => {
      expect(promoProcess.reducer(state, {type: fetchPromoAction.pending.type}))
        .toEqual({isLoading: true, promo: null});
    });

    it('fetchPromoAction fulfilled', () => {
      expect(promoProcess.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
        .toEqual({isLoading: false, promo: promo});
    });

    it('fetchPromoAction rejected', () => {
      expect(promoProcess.reducer(state, {type: fetchPromoAction.rejected.type}))
        .toEqual({isLoading: false, promo: null});
    });
  });
});
