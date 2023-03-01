
import { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getSimilarCameras } from '../../store/similar-cameras-process/selector';
import { DEFAULT_SLIDE, MAX_SLIDES_ON_PAGE, SLIDE_COUNTER_STEP } from '../../const';
import ProductCard from '../product-card/product-card';
// import { Camera } from '../../types/types';

// type Props = {
//   similarCameras: Camera[];
// };

function SimilarCameraSlider (): JSX.Element { //{ similarCameras }: Props

  const [firstSlideCounter, setFirstSlideCounter] = useState(DEFAULT_SLIDE);

  const similarCameras = useAppSelector(getSimilarCameras);
  const similarCameraListSlice = similarCameras.slice(firstSlideCounter, (firstSlideCounter + MAX_SLIDES_ON_PAGE));

  return (
    <section className="product-similar">
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
        <div className="product-similar__slider">

          <div className="product-similar__slider-list">

            {similarCameraListSlice.map((camera) => (
              <div key={camera.id} className="product-card is-active">
                <ProductCard key={camera.id} camera={camera} />
              </div>
            ))}

          </div>

          <button onClick={() => setFirstSlideCounter( firstSlideCounter - SLIDE_COUNTER_STEP)} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled={firstSlideCounter === DEFAULT_SLIDE}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>

          <button onClick={() => setFirstSlideCounter( firstSlideCounter + SLIDE_COUNTER_STEP)} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" disabled={firstSlideCounter === (similarCameras.length - SLIDE_COUNTER_STEP)}>
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
