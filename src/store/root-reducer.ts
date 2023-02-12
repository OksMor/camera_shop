import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { cameraProcess } from './camera-process/camera-process';

export const rootReducer = combineReducers({

  [NameSpace.CamerasData]: cameraProcess.reducer,

});
