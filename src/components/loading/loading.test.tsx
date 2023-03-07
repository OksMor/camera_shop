import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../../components/history-router/history-router';
import { createMemoryHistory } from 'history';
import Loading from './loading';

describe('Component: Loader', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HelmetProvider>
        <HistoryRouter history={history}>
          <Loading />
        </HistoryRouter>
      </HelmetProvider>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });
});
