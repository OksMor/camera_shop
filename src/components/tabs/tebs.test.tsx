// import {render, screen} from '@testing-library/react';
// import HistoryRouter from '../history-router/history-router';
// import {Provider} from 'react-redux';
// import {store} from '../../store';
// import {createMemoryHistory } from 'history';
// import Tabs from './tabs';
// // -----------------------------------------------------------Прокинут пропс
// describe('Component: Tabs', () => {
//   it('should render correctly', () => {
//     const history = createMemoryHistory();

//     render(
//       <HistoryRouter history={history}>
//         <Provider store={store}>
//           <Tabs />
//         </Provider>
//       </HistoryRouter>,
//     );

//     expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
//     expect(screen.getByText(/Категория/i)).toBeInTheDocument();
//     expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
//     expect(screen.getByText(/Категория/i)).toBeInTheDocument();
//     expect(screen.getByText(/Артикул/i)).toBeInTheDocument();
//     expect(screen.getByText(/Категория/i)).toBeInTheDocument();
//   });
// });
