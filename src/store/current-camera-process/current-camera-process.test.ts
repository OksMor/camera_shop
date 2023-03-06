import { fetchCurrentCameraAction } from '../api-action';
import { currentCameraProcess } from './current-camera-process';
import { Camera } from '../../types/types';
import { CameraState } from '../../types/state';
import { mockCamera } from '../../mocks/mocks';

const camera: Camera = mockCamera();

describe('Reducer: currentFilmProcess', () => {
  let state: CameraState;

  beforeEach(() => {
    state = {camera: null, isLoading: true};
  });

  it('without additional parameters should return initial state', () => {
    expect(currentCameraProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({camera: null, isLoading: true});
  });

  describe('currentCameraProcess test', () => {
    it('fetchCurrentCameraAction pending', () => {
      expect(currentCameraProcess.reducer(state, {type: fetchCurrentCameraAction.pending.type}))
        .toEqual({isLoading: true, camera: null});
    });

    it('fetchCurrentCameraAction fulfilled', () => {
      expect(currentCameraProcess.reducer(state, {type: fetchCurrentCameraAction.fulfilled.type, payload: camera}))
        .toEqual({isLoading: false, camera: camera});
    });

    it('fetchCurrentCameraAction rejected', () => {
      expect(currentCameraProcess.reducer(state, {type: fetchCurrentCameraAction.rejected.type}))
        .toEqual({isLoading: false, camera: null});
    });
  });

});
