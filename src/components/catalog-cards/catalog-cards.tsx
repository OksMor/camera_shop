import { Camera } from '../../types/types';

import ProductCard from '../product-card/product-card';

type QuestsListProps = {
  cameras: Camera[];
}

function CatalogCards(props: QuestsListProps): JSX.Element {
  const { cameras } = props;

  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => <ProductCard key={camera.id} camera={camera}/>)}
    </div>
  );
}

export default CatalogCards;
