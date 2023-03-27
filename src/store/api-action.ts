import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { Camera, Promo, Review, ReviewPost } from '../types/types';
import { APIRoute } from '../const';
import { toast } from 'react-toastify';

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
  async (cameraId, {extra: api}) => (await api.get<Review[]>(`${APIRoute.Cameras}/${cameraId}/reviews`)).data,
);

export const postReviewAction = createAsyncThunk<
  void,
  ReviewPost,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'data/postReview',
  async (
    { userName, advantage, disadvantage, review, rating, cameraId },
    { extra: api },
  ) => {
    try {
      await api.post<ReviewPost>(APIRoute.Reviews, { userName, advantage, disadvantage, review, rating, cameraId });
    } catch (error) {
      toast.error('Комментарий не был отправлен. Попробуйте позже.');
      throw error;
    }
  },
);

export const fetchCamerasByNameAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCamerasByName',
  async (name, {extra: api}) => (await api.get<Camera[]>(APIRoute.Cameras, { params: name })).data,
);

// export const fetchCamerasByNameAction = createAsyncThunk<Camera[], string, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/fetchCamerasByName',
//   async (
//     { name },
//     { extra: api },
//     ) => {
//     try {
//       await api.get<Camera[]>(APIRoute.Cameras, { name });
//     } catch (error) {
//       toast.error('Попробуйте позже');
//       throw error;
//     }
//   }
// );
