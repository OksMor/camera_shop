import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-router/history-router';

import App from './app';
import { mockCamera, mockCameras, mockPromoCamera, mockSimilarCameras, mockReviews } from '../../mocks/mocks';
import { MAX_REVIEW_COUNT } from '../../const';

const history = createMemoryHistory();

const cameras = mockCameras();
const camera = mockCamera();
const promo = mockPromoCamera();
const similarCameras = mockSimilarCameras();
const reviews = mockReviews();

const mockStore = configureMockStore([thunk]);

const store = mockStore({
  CAMERASDATA: { cameras: cameras, isLoading: true },
  CURRENTCAMERA: { camera: camera, isLoading: true },
  PROMODATA: { promo: promo, isLoading: true },
  SIMILARCAMERAS: { similarCameras: similarCameras, isLoading: true },
  REVIEWSDATA: { reviews: reviews, isDataLoading: true },
  APP: { reviewsOpen: MAX_REVIEW_COUNT }
});

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {

  it('should render "CatalogScreen" when user navigate to "/"', () => {
    history.push('/');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();

  });

  it('should render CatalogPage when user navigate to "/catalog/id"', () => {
    history.push('/catalog/2');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render CameraPage when user navigate to "/cameras/id"', () => {
    history.push('/cameras/2/:about');

    render(fakeApp);

    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();

  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back to the main page')).toBeInTheDocument();
  });

});
