import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';

import HistoryRouter from '../history-router/history-router';
import Banner from './banner';
import { mockPromoCamera } from '../../mocks/mocks';

describe('Component: Banner', () => {
  const history = createMemoryHistory();
  const promo = mockPromoCamera();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Banner />
        </HistoryRouter>
      </Provider>
    );

    // expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
    expect(screen.queryByText(promo.name)).not.toBeInTheDocument();
    // expect(screen.getByText('Новинка!')).toBeInTheDocument();
    // expect(screen.getByText('Профессиональная камера от известного производителя')).toBeInTheDocument();
  });
});
