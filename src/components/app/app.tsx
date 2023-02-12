import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import { AppRoute } from '../../const';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<CatalogScreen />}
          />
          {/* <Route
            path="*"
            element={<NotFoundScreen />}
          /> */}
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
