import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';

import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';

import { createAPI } from '../services/api';

import { fetchCamerasAction, fetchCurrentCameraAction, fetchSimilarCamerasAction, fetchPromoAction, fetchReviewsAction, postReviewAction } from './api-action';
import { APIRoute } from '../const';
import { State } from '../types/state';

import { mockCamera, mockReview, mockReviewPost } from '../mocks/mocks';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchCamerasAction when GET /cameras', async () => {
    const cameras = mockCamera();

    mockAPI
      .onGet(APIRoute.Cameras)
      .reply(200, cameras);

    const store = mockStore();

    await store.dispatch(fetchCamerasAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      fetchCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCurrentCameraAction when GET /cameras/id', async () => {
    const currentCamera = mockCamera();
    const id = currentCamera.id;

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}`)
      .reply(200, currentCamera);

    const store = mockStore();

    await store.dispatch(fetchCurrentCameraAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentCameraAction.pending.type,
      fetchCurrentCameraAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchSimilarCamerasAction when GET /cameras/id/similar', async () => {
    const currentCamera = mockCamera();
    const id = currentCamera.id;
    const similarCamerasList = mockCamera();

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/similar`)
      .reply(200, similarCamerasList);

    const store = mockStore();

    await store.dispatch(fetchSimilarCamerasAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarCamerasAction.pending.type,
      fetchSimilarCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchPromoAction when GET /promo', async () => {
    const camera = mockCamera();

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, camera);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchReviewsAction when GET /cameras/id/reviews', async () => {
    const camera = mockCamera();
    const id = camera.id;
    const reviews = mockReview();

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/reviews`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(fetchReviewsAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewsAction.pending.type,
      fetchReviewsAction.fulfilled.type
    ]);
  });

  it('should dispatch postReviewAction when POST /reviews', async () => {
    const review = mockReviewPost();

    mockAPI
      .onPost(APIRoute.Reviews)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(postReviewAction(review));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      postReviewAction.pending.type,
      postReviewAction.fulfilled.type,
    ]);
  });

});
