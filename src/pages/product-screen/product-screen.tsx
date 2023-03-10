import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

import dayjs from 'dayjs';

import { fetchCurrentCameraAction, fetchSimilarCamerasAction, fetchReviewsAction } from '../../store/api-action';
import { getReviewsOpened } from '../../store/app-process/selector';
import { createReviewsList } from '../../store/app-process/app-process';

import Header from '../../components/header/header';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Footer from '../../components/footer/footer';
import Tabs from '../../components/tabs/tabs';
import SimilarCameraSlider from '../../components/similar-camera-slider/similar-camera-slider';
import ReviewBlockList from '../../components/revirew-block-list/review-block-list';
import ShowMore from '../../components/show-more/show-more';
import CatalogAddItemModal from '../../components/catalog-add-item-modal/catalog-add-item-modal';
import ProductReviewModal from '../../components/product-review-modal/product-review-modal';
import ProductReviewSuccessModal from '../../components/product-review-success-modal/product-review-success-modal';

import Loading from '../../components/loading/loading';

import { getCurrentCamera } from '../../store/current-camera-process/selector';
import { getReviews } from '../../store/reviews-process/selector';

import { MAX_RATING } from '../../const';

const scrollToTop = () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});

function ProductScreen(): JSX.Element {

  const {id} = useParams();
  const dispatch = useAppDispatch();

  const camera = useAppSelector(getCurrentCamera);

  const reviews = useAppSelector(getReviews);
  const reviewsCount = useAppSelector(getReviewsOpened);

  const sortedReviews = [...reviews].sort((a, b) =>
    dayjs(a.createAt).isAfter(dayjs(b.createAt)) ? -1 : 1,
  );// врет с датой, часовой пояс?

  const [inBasket, setInBasket] = useState<boolean>(false);
  const [isCatalogAddItemModalOpen, setCatalogAddItemModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setReviewModalOpen] = useState<boolean>(false);
  const [isReviewSuccessModalOpen, setReviewSuccessModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentCameraAction(id));
      dispatch(fetchSimilarCamerasAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  const handleButtonClick = () => {
    setInBasket(true);
    setCatalogAddItemModalOpen(true);
  };

  const handleReviewBtnClick = () => {
    setReviewModalOpen(true);
  };

  const handleShowMoreButtonClick = () => {
    dispatch(createReviewsList());
  };

  if (!camera) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>{`Camera Shop. ${camera.name}`}</title>
      </Helmet>
      <Header/>
      <main>
        <div className="page-content">
          <Breadcrumbs camera={camera}/>

          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/${camera.previewImgWebp}, {${process.env.PUBLIC_URL}/${camera.previewImgWebp2x}} 2x`}/>
                    <img src={`${process.env.PUBLIC_URL}/${camera.previewImg}`} srcSet={`${process.env.PUBLIC_URL}/${camera.previewImg2x} 2x`} width="560" height="480" alt={camera.name}/>
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">{camera.name}</h1>
                  <div className="rate product__rate">
                    {Array.from({length: MAX_RATING}, (_, index) => (
                      <svg width="17" height="16" aria-hidden="true" key={index}>
                        <use xlinkHref={`#icon-${index < camera.rating ? 'full-' : ''}star`}></use>
                      </svg>
                    ))}
                    <p className="visually-hidden">Рейтинг: {camera.rating}</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}</p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>{camera.price.toLocaleString('ru-Ru')} ₽</p>
                  {inBasket ? <button className="btn btn--purple-border product-card__btn product-card__btn--in-cart"><svg width={16} height={16} aria-hidden="true"><use xlinkHref="#icon-basket"/></svg>В корзине</button> : <button className="btn btn--purple product-card__btn" type="button" onClick={handleButtonClick}><svg width="24" height="16" aria-hidden="true"><use xlinkHref="#icon-add-basket"></use></svg>Добавить в корзину</button>}

                  <Tabs camera={camera} />
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <SimilarCameraSlider />
          </div>
          <div className="page-content__section">
            <section className="review-block">
              <div className="container">
                <div className="page-content__headed">
                  <h2 className="title title--h3">Отзывы</h2>
                  <button className="btn" type="button" onClick={handleReviewBtnClick}>Оставить свой отзыв</button>
                </div>

                <ReviewBlockList reviews={sortedReviews.slice(0, reviewsCount)}/>
                {(sortedReviews.length > reviewsCount) && <ShowMore onClick={handleShowMoreButtonClick}/>}

              </div>
            </section>
          </div>
        </div>
      </main>
      <a className="up-btn" href='!#' onClick={scrollToTop}>
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>

      <Footer/>

      {isCatalogAddItemModalOpen && (
        <CatalogAddItemModal
          isCatalogAddItemModalOpen={isCatalogAddItemModalOpen}
          setCatalogAddItemModalOpen={setCatalogAddItemModalOpen}
          camera={camera}
        />
      )}
      {isReviewModalOpen && (
        <ProductReviewModal
          isReviewModalOpen={isReviewModalOpen}
          setReviewModalOpen={setReviewModalOpen}
          setReviewSuccessModalOpen={setReviewSuccessModalOpen}
          camera={camera}
        />
      )}

      {isReviewSuccessModalOpen && (
        <ProductReviewSuccessModal
          isReviewSuccessModalOpen={isReviewSuccessModalOpen}
          setReviewSuccessModalOpen={setReviewSuccessModalOpen}
        />
      )}

    </>
  );
}

export default ProductScreen;
