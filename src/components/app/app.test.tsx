// import { render, screen } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import { Provider } from 'react-redux';

// import HistoryRouter from '../history-router/history-router';
// import App from './app';
// import { AppRoute } from '../../const';

// import { store } from '../../mocks/mocks';

// const history = createMemoryHistory();

// const fakeApp = (
//   <Provider store={store}>
//     <HistoryRouter history={history}>
//       <App />
//     </HistoryRouter>
//   </Provider>
// );

// window.scrollTo = jest.fn();

// describe('Application Routing', () => {
//   it('should render "MainPage" when user navigate to "/"', () => {
//     history.push('/');

//     render(fakeApp);

//     expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
//   });

//   it('should render CatalogPage when user navigate to "/catalog/id"', () => {
//     history.push(`${AppRoute.Catalog}${1}}`);

//     render(fakeApp);

//     expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
//   });

//   it('should render CameraPage when user navigate to "/cameras/id"', () => {
//     history.push('/cameras/21');

//     render(fakeApp);

//     expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
//     expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
//   });

//   it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
//     history.push('/non-existent-route');

//     render(fakeApp);

//     expect(screen.getByText('404. Page not found')).toBeInTheDocument();
//     expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
//   });
// });
