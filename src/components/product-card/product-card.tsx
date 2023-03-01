import { Camera } from '../../types/types';
import { APIRoute, MAX_RATING } from '../../const';

import { useState } from 'react';
import { Fragment } from 'react';

type ProductCardProps = {
  camera: Camera;
}

function ProductCard(props: ProductCardProps): JSX.Element {
  const { camera } = props;

  const [inBasket, setInBasket] = useState<boolean>(false);

  const handleButtonClick = () => { // попап добавления в корзину
    setInBasket(true);
  };

  return (
    <Fragment key={camera.id}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`}/>
          <img src={camera.previewImg} srcSet={`${camera.previewImg2x} 2x`} width="280" height="240" alt={camera.name}/>
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {Array.from({length: MAX_RATING}, (_, index) => (
            <svg width="17" height="16" aria-hidden="true" key={index}>
              <use xlinkHref={`#icon-${index < camera.rating ? 'full-' : ''}star`}></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: {camera.rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{camera.reviewCount}</p>
        </div>
        <p className="product-card__title">{`${camera.category} ${camera.name}`}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{camera.price.toLocaleString('ru-Ru')} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        {inBasket ? <button className="btn btn--purple-border product-card__btn product-card__btn--in-cart"><svg width={16} height={16} aria-hidden="true"><use xlinkHref="#icon-basket"/></svg>В корзине</button> : <button className="btn btn--purple product-card__btn" type="button" onClick={handleButtonClick}>Купить</button>}
        {/* <button className="btn btn--purple product-card__btn" type="button">Купить</button> */}
        <a className="btn btn--transparent" href={`${APIRoute.Cameras}/${camera.id}`}>Подробнее</a>
      </div>
    </Fragment>
  );
}

export default ProductCard;
