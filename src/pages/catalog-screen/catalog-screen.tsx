import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import { fetchCamerasAction, fetchPromoAction } from '../../store/api-action';
import { getCameras, getIsCamerasLoading } from '../../store/cameras-process/selector';

import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';

import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';

import Pagination from '../../components/pagination/pagination';
import Footer from '../../components/footer/footer';

import CatalogCards from '../../components/catalog-cards/catalog-cards';

import Loading from '../../components/loading/loading';

import { Page } from '../../const';

function CatalogScreen(): JSX.Element {

  const dispatch = useAppDispatch();

  const cameras = useAppSelector(getCameras);

  const { pageId } = useParams();

  const firstCardIndex = Page.MaxCards * (Number(pageId) - Page.CounterStep);

  const camerasOnPage = cameras.slice(firstCardIndex, (firstCardIndex + Page.MaxCards));

  const isCamerasLoading = useAppSelector(getIsCamerasLoading);

  useEffect(() => {
    dispatch(fetchCamerasAction());
    dispatch(fetchPromoAction());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Camera Shop. Каталог</title>
      </Helmet>

      <Header/>

      <main>
        <Banner/>

        <div className="page-content">
          <Breadcrumbs camera={null}/>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <CatalogFilter/>
                </div>
                <div className="catalog__content">
                  <CatalogSort/>
                  {isCamerasLoading ? <Loading/> : <CatalogCards cameras={camerasOnPage} />}
                  <Pagination/>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer/>
    </>
  );
}

export default CatalogScreen;
