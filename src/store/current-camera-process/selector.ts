import { Camera } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getCurrentCamera = (state: State): Camera | null => state[NameSpace.CurrentCamera].camera;
