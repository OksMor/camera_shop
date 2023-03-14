import { Camera } from '../../types/types';

import ProductCard from '../product-card/product-card';

type CatalogCardsProps = {
  cameras: Camera[];
}

function CatalogCards(props: CatalogCardsProps): JSX.Element {
  const { cameras } = props;

  return (
    <div className="cards catalog__cards" data-testid="catalog__cards">
      {cameras.map((camera) => (
        <div key={camera.id} className="product-card">
          <ProductCard key={camera.id} camera={camera} />
        </div>
      ))}
    </div>
  );
}

export default CatalogCards;
