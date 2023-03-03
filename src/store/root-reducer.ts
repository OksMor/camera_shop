import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cameraProcess } from './camera-process/camera-process';
import { promoProcess } from './promo-process/promo-process';
import { currentCameraProcess } from './current-camera-process/current-camera-process';
import { similarCamerasProcess } from './similar-cameras-process/similar-cameras-process';
import { reviewsProcess } from './reviews-process/reviews-process';
import { appProcess } from './app-process/app-process';

export const rootReducer = combineReducers({
  [NameSpace.App]: appProcess.reducer,
  [NameSpace.CamerasData]: cameraProcess.reducer,
  [NameSpace.PromoData]: promoProcess.reducer,
  [NameSpace.CurrentCamera]: currentCameraProcess.reducer,
  [NameSpace.SimilarCameras]: similarCamerasProcess.reducer,
  [NameSpace.ReviewsData]: reviewsProcess.reducer,

});
