import { store } from '../store/index.js';

import { Camera } from './types.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type CamerasState = {
  cameras: Camera[];
  isLoading: boolean;
};
