import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { mockCamera } from '../../mocks/mocks';
import HistoryRouter from '../history-router/history-router';
import Breadcrumbs from './breadcrumbs';

const camera = mockCamera();

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Breadcrumbs camera={camera} />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('Каталог')).toBeInTheDocument();
  });
});
