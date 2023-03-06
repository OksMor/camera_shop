import { fetchCamerasAction } from '../api-action';
import { CamerasState } from '../../types/state';
import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

const initialState: CamerasState = {
  cameras: [],
  isLoading: true,
  hasError: false,
};

export const camerasProcess = createSlice({
  name: NameSpace.CamerasData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchCamerasAction.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  }
});
