import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cameraProcess } from './camera-process/camera-process';
import { promoProcess } from './promo-process/promo-process';
import { currentCameraProcess } from './current-camera-process/current-camera-process';

export const rootReducer = combineReducers({

  [NameSpace.CamerasData]: cameraProcess.reducer,
  [NameSpace.PromoData]: promoProcess.reducer,
  [NameSpace.CurrentCamera]: currentCameraProcess.reducer,

});
