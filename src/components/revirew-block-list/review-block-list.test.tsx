import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import ReviewBlockList from './review-block-list';
import { mockReviews } from '../../mocks/mocks';

const reviews = mockReviews();

describe('Component: CatalogCard', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <ReviewBlockList reviews={reviews}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('review-block__list')).toBeInTheDocument();

  });
});
