import Header from '../../components/header/header';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogSort from '../../components/catalog-sort/catalog-sort';
import ProductCard from '../../components/product-card/product-card';
import Pagination from '../../components/pagination/pagination';
import Footer from '../../components/footer/footer';

function CatalogScreen(): JSX.Element {
  return (
    <>
      <Header/>

      <main>
        <Banner/>

        <div className="page-content">
          <Breadcrumbs/>
          <section className="catalog">
            <div className="container">
              <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
              <div className="page-content__columns">
                <div className="catalog__aside">
                  <CatalogFilter/>
                </div>
                <div className="catalog__content">
                  <CatalogSort/>
                  <div className="cards catalog__cards">
                    <ProductCard/>
                  </div>
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
