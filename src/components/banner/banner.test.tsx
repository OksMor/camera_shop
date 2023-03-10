import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';

import HistoryRouter from '../history-router/history-router';
import Banner from './banner';
import { mockPromoCamera } from '../../mocks/mocks';


const promo = mockPromoCamera();
const mockStore = configureMockStore([thunk]);

const store = mockStore({
  PROMODATA: { promo: promo, isLoading: true },
});


describe('Component: Banner', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Banner />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
  });
});
