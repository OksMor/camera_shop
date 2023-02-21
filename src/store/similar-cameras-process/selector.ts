import { Camera } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getSimilarCameras = (state: State): Camera[] => state[NameSpace.SimilarCameras].cameras;

export const getIsSimilarCamerasLoading = (state: State): boolean => state[NameSpace.SimilarCameras].isLoading;
