import { createSlice } from '@reduxjs/toolkit';
import { fetchSimilarCamerasAction } from '../api-action';
import { SimilarCamerasState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: SimilarCamerasState = {
  similarCameras: [],
  isLoading: true
};

export const similarCamerasProcess = createSlice({
  name: NameSpace.SimilarCameras,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSimilarCamerasAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSimilarCamerasAction.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchSimilarCamerasAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
