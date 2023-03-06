import { fetchCamerasAction } from '../api-action';
import { camerasProcess } from './cameras-process';
import { Camera } from '../../types/types';
import { CamerasState } from '../../types/state';
import { mockCamera } from '../../mocks/mocks';

const cameras: Camera[] = Array.from({length: 24}, mockCamera);

describe('Reducer: filmsProcess', () => {
  let state: CamerasState;

  beforeEach(() => {
    state = {cameras: [], isLoading: true, hasError: false};
  });

  it('without additional parameters should return initial state', () => {
    expect(camerasProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({cameras: [], isLoading: true, hasError: false});
  });

  describe('camerasProcess test', () => {
    it('fetchCamerasAction pending', () => {
      expect(camerasProcess.reducer(state, {type: fetchCamerasAction.pending.type}))
        .toEqual({isLoading: true, cameras: [], hasError: false});
    });
    it('fetchCamerasAction fulfilled', () => {
      expect(camerasProcess.reducer(state, {type: fetchCamerasAction.fulfilled.type, payload: cameras}))
        .toEqual({isLoading: false, cameras: cameras, hasError: false});
    });
    it('fetchCamerasAction rejected', () => {
      expect(camerasProcess.reducer(state, {type: fetchCamerasAction.rejected.type}))
        .toEqual({isLoading: false, cameras: [], hasError: true});
    });
  });

});
