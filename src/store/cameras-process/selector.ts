import { Camera } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getCameras = (state: State): Camera[] => state[NameSpace.CamerasData].cameras;

export const getIsCamerasLoading = (state: State): boolean => state[NameSpace.CamerasData].isLoading;

// export const getErrorStatus = (state: State): boolean => state[NameSpace.CamerasData].hasError;
