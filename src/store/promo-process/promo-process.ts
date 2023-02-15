import { fetchPromoAction } from '../api-action';
import { createSlice } from '@reduxjs/toolkit';
import { PromoState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: PromoState = {
  promo: null,
  isLoading: true
};

export const promoProcess = createSlice({
  name: NameSpace.PromoData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchPromoAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
