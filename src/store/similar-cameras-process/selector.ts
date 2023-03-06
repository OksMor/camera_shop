import { Camera } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getSimilarCameras = (state: State): Camera[] => state[NameSpace.SimilarCameras].similarCameras;
