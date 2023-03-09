import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { mockCamera } from '../../mocks/mocks';
import HistoryRouter from '../../components/history-router/history-router';
import  ProductCard from './product-card';

const camera = mockCamera();

describe('Component:  ProductCard', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ProductCard camera={camera} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Купить')).toBeInTheDocument();
    expect(screen.getByText('Подробнее')).toBeInTheDocument();
  });
});
