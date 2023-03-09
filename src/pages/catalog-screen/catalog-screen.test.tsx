import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';
import HistoryRouter from '../../components/history-router/history-router';
import  CatalogScreen from './catalog-screen';

describe('Component: MainScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <Provider store={store}>
          <HistoryRouter history={history}>
            < CatalogScreen />
          </HistoryRouter>
        </Provider>
      </HelmetProvider>,
    );

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});
