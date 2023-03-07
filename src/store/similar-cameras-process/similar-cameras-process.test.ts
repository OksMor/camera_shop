import { fetchSimilarCamerasAction } from '../api-action';
import { similarCamerasProcess } from './similar-cameras-process';
import { Camera } from '../../types/types';
import { SimilarCamerasState } from '../../types/state';
import {mockSimilarCameras } from '../../mocks/mocks';

const similarCameras: Camera[] = mockSimilarCameras;

describe('Reducer: similarCamerasProcess', () => {
  let state: SimilarCamerasState;

  beforeEach(() => {
    state = {similarCameras: [], isLoading: true};
  });

  it('without additional parameters should return initial state', () => {
    expect(similarCamerasProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({similarCameras: [], isLoading: true});
  });

  describe('similarCamerasProcess test', () => {
    it('fetchSimilarCamerasAction pending', () => {
      expect(similarCamerasProcess.reducer(state, {type: fetchSimilarCamerasAction.pending.type}))
        .toEqual({isLoading: true, similarCameras: []});
    });

    it('fetchSimilarCamerasAction fulfilled', () => {
      expect(similarCamerasProcess.reducer(state, {type: fetchSimilarCamerasAction.fulfilled.type, payload: similarCameras}))
        .toEqual({isLoading: false, similarCameras: similarCameras});
    });

    it('fetchSimilarCamerasAction rejected', () => {
      expect(similarCamerasProcess.reducer(state, {type: fetchSimilarCamerasAction.rejected.type}))
        .toEqual({isLoading: false, similarCameras: []});
    });
  });

});
