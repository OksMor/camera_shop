import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../store';
import Pagination from './pagination';

describe('Component: Pagination', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <Pagination />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Назад/i)).toBeInTheDocument();
    expect(screen.getByText(/Далее/i)).toBeInTheDocument();
  });
});
