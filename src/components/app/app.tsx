import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import ProductScreen from '../../pages/product-screen/product-screen';

import { AppRoute, DEFAULT_PAGE } from '../../const';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<Navigate to = {`${AppRoute.Catalog}/${DEFAULT_PAGE}`} />}
          />
          <Route
            path={`${AppRoute.Catalog}/:pageId`}
            element={<CatalogScreen />}
          />
          <Route
            path={`${AppRoute.Camera}/:id`}
            element={<ProductScreen />}
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
