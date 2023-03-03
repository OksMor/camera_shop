import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Camera, Promo, Review } from '../types/types';
import { APIRoute } from '../const';

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
  'data/fetchCurrentCamera',
  async (cameraId, {extra: api}) => (await api.get<Camera>(`${APIRoute.Cameras}/${cameraId}`)).data,
);

export const fetchSimilarCamerasAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarCameras',
  async (cameraId, {extra: api}) =>
    (await api.get<Camera[]>(`${APIRoute.Cameras}/${cameraId}/similar`)).data,
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (cameraId, {extra: api}) => (await api.get<Review[]>(`${APIRoute.Cameras}/${cameraId}/reviews`).data,
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
