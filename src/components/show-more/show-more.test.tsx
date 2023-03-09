import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import HistoryRouter from '../../components/history-router/history-router';
import { store } from '../../store';
import ShowMore from './show-more';

describe('Component: ShowMore', () => {
  const onClick = jest.fn();
  it('should render correctly', () => {
    const history = createMemoryHistory();


    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ShowMore onClick={onClick}/>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });
});
