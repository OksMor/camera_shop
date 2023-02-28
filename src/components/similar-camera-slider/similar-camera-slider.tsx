
import { useState } from 'react';
// import { useAppSelector } from '../../hooks/hooks';
// import { getSimilarCameras } from '../../store/similar-cameras-process/selector';
import { DEFAULT_SLIDE, MAX_SLIDES_ON_PAGE, SLIDE_COUNTER_STEP } from '../../const';
import ProductCard from '../product-card/product-card';
import { Camera } from '../../types/types';

type Props = {
  similarCameras: Camera[] | null;
};

function SimilarCameraSlider ({ similarCameras }: Props): JSX.Element {

  const [contentIndex, setContentIndex] = useState<number>(MAX_SLIDES_ON_PAGE);

  const firstContentIndex = contentIndex - MAX_SLIDES_ON_PAGE;

  // ! блиииииин ну почему не работаетттттттттттттт

  const prevBtnClickHandler = () => {
    setContentIndex((index) => index - SLIDE_COUNTER_STEP);
  };

  const nextBtnClickHandler = () => {
    setContentIndex((index) => index + SLIDE_COUNTER_STEP);
  };

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">

          <div className="product-similar__slider-list">
            {similarCameras?.slice(firstContentIndex, contentIndex).map((camera) => (
              <ProductCard key={camera.id} camera={camera} />
            ))}
          </div>

          <button onClick={prevBtnClickHandler} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled={firstContentIndex === DEFAULT_SLIDE}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>

          <button onClick={nextBtnClickHandler} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" disabled={contentIndex === similarCameras?.length}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}

export default SimilarCameraSlider;
