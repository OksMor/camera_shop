import { fetchCurrentCameraAction } from '../api-action';
import { createSlice } from '@reduxjs/toolkit';
import { CameraState } from '../../types/state';
import { NameSpace } from '../../const';

const initialState: CameraState = {
  camera: null,
  isLoading: true
};

export const currentCameraProcess = createSlice({
  name: NameSpace.CurrentCamera,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCurrentCameraAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCurrentCameraAction.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCurrentCameraAction.rejected, (state) => {
        state.isLoading = false;
      });
  }
});
