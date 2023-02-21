import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Camera, Promo } from '../types/types';
import { APIRoute } from '../const';

//const SIMILAR_COUNT = 3; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const fetchCamerasAction = createAsyncThunk<Camera[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async (_arg, {extra: api}) => (await api.get<Camera[]>(APIRoute.Cameras)).data,
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {extra: api}) => (await api.get<Promo>(APIRoute.Promo)).data,
);

export const fetchCurrentCameraAction = createAsyncThunk<Camera, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentFilm',
  async (cameraId, {extra: api}) => (await api.get<Camera>(`${APIRoute.Cameras}/${cameraId}`)).data,
);

export const fetchSimilarCamerasAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async (cameraId, {extra: api}) =>
    (await api.get<Camera[]>(`${APIRoute.Cameras}/${cameraId}/similar`)).data.filter((film) => film.id.toString() !== cameraId),
);

// export const fetchSimilarCamerasAction = createAsyncThunk<Camera[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchSimilarFilms',
//   async (cameraId, {extra: api}) =>
//     (await api.get<Camera[]>(`${APIRoute.Cameras}/${cameraId}/similar`)).data.filter((film) => film.id.toString() !== cameraId).slice(0, SIMILAR_COUNT),
// );
