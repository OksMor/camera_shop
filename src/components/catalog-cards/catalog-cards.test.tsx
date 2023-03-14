import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import CatalogCards from './catalog-cards';
import { mockCameras } from '../../mocks/mocks';

const cameras = mockCameras();

describe('Component: CatalogCard', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CatalogCards cameras={cameras}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('catalog__cards')).toBeInTheDocument();

  });
});
