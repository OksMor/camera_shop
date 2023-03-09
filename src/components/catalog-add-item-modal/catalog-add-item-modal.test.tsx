
import { render, screen } from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import CatalogAddItemModal from './catalog-add-item-modal';
import { mockCamera } from '../../mocks/mocks';

describe('Component: ReviewModal', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const camera = mockCamera();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <CatalogAddItemModal
            setCatalogAddItemModalOpen={() => true}
            isCatalogAddItemModalOpen
            camera={camera}
          />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText('Добавить товар в корзину')).toBeInTheDocument();

  });
});
