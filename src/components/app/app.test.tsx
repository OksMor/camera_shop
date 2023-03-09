import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';

import HistoryRouter from '../history-router/history-router';
import App from './app';
// import ErrorScreen from '../../pages/error-screen/error-screen';
import { AppRoute } from '../../const';

import { store } from '../../mocks/mocks';
import { mockCamera } from '../../mocks/mocks';

const history = createMemoryHistory();

const camera = mockCamera();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

// window.scrollTo = jest.fn();

describe('Application Routing', () => {

  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
    expect(screen.queryByText(camera.name)).not.toBeInTheDocument();
  });

  // it('should render CatalogPage when user navigate to "/catalog/id"', () => {
  //   history.push(`${AppRoute.Catalog}/2`);

  //   render(fakeApp);

  //   expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  // });

  // it('should render CameraPage when user navigate to "/cameras/id"', () => {
  //   history.push(`${AppRoute.Camera}/2`);

  //   render(fakeApp);

  //   expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();

  // });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Back to the main page')).toBeInTheDocument();
  });

});
