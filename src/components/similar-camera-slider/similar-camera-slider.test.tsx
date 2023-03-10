import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from '../../store';
import HistoryRouter from '../../components/history-router/history-router';
import SimilarCameraSlider from './similar-camera-slider';

describe('Component: SimilarCameraSlider', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <SimilarCameraSlider />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText('Похожие товары')).toBeInTheDocument();
  });
});
