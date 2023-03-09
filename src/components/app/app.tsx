import { Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// import { useAppSelector } from '../../hooks/hooks';

// import { getErrorStatus } from '../../store/cameras-process/selector';

import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
// import ErrorScreen from '../../pages/error-screen/error-screen';

import { AppRoute, DEFAULT_PAGE } from '../../const';

function App(): JSX.Element {

  // const hasError = useAppSelector(getErrorStatus);

  // if (hasError) {
  //   return (
  //     <ErrorScreen />
  //   );
  // }

  return (
    <HelmetProvider>
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
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
