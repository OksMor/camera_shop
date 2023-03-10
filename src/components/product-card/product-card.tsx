import { Camera } from '../../types/types';
import { APIRoute, MAX_RATING } from '../../const';

import { useState, Fragment } from 'react';

import CatalogAddItemModal from '../catalog-add-item-modal/catalog-add-item-modal';

type ProductCardProps = {
  camera: Camera;
}

function ProductCard(props: ProductCardProps): JSX.Element {
  const { camera } = props;

  const [inBasket, setInBasket] = useState<boolean>(false);
  const [isCatalogAddItemModalOpen, setCatalogAddItemModalOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setInBasket(true);
    setCatalogAddItemModalOpen(true);
  };

  return (
    <Fragment key={camera.id}>
      <div className="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/${camera.previewImgWebp}, {${process.env.PUBLIC_URL}/${camera.previewImgWebp2x}} 2x`}/>
          <img src={`${process.env.PUBLIC_URL}/${camera.previewImg}`} srcSet={`${process.env.PUBLIC_URL}/${camera.previewImg2x} 2x`} width="280" height="240" alt={camera.name}/>
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
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{camera.price.toLocaleString('ru-Ru')} ₽ </p>
      </div>
      <div className="product-card__buttons">
        {inBasket ? <button className="btn btn--purple-border product-card__btn product-card__btn--in-cart"><svg width={16} height={16} aria-hidden="true"><use xlinkHref="#icon-basket"/></svg>В корзине</button> : <button className="btn btn--purple product-card__btn" type="button" onClick={handleButtonClick}>Купить</button>}
        <a className="btn btn--transparent" href={`${APIRoute.Cameras}/${camera.id}`}>Подробнее</a>
      </div>

      {isCatalogAddItemModalOpen && (
        <CatalogAddItemModal
          isCatalogAddItemModalOpen={isCatalogAddItemModalOpen}
          setCatalogAddItemModalOpen={setCatalogAddItemModalOpen}
          camera={camera}
        />
      )}

    </Fragment>
  );
}

export default ProductCard;
