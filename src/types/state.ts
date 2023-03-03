import { store } from '../store/index.js';

import { Camera, Promo, Review } from './types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CamerasState = {
  cameras: Camera[];
  isLoading: boolean;
};

export type PromoState = {
  promo: Promo | null;
  isLoading: boolean;
};

export type CameraState = {
  camera: Camera | null;
  isLoading: boolean;
};

export type SimilarCamerasState = {
  similarCameras: Camera[];
  isLoading: boolean;
};

export type ReviewState = {
  review: Review | null;
  isLoading: boolean;
};

export type AppState = {
  reviewsOpen: number;
};
