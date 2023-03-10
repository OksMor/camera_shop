import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import ProductScreen from './product-screen';

import { mockCamera, mockCameras, mockPromoCamera, mockSimilarCameras, mockReviews } from '../../mocks/mocks';
import { MAX_REVIEW_COUNT } from '../../const';

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

describe('Component: ProductScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <Provider store={store}>
          <HistoryRouter history={history}>
            <ProductScreen />
          </HistoryRouter>
        </Provider>
      </HelmetProvider>,
    );

    expect(screen.getByText('Отзывы')).toBeInTheDocument();
  });
});
