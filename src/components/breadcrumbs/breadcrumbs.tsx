import { Camera } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type BreadcrumbsProps = {
  camera: Camera | null;
}

function Breadcrumbs(props: BreadcrumbsProps): JSX.Element {
  const { camera } = props;

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">

          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Root}>Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>

          <li className="breadcrumbs__item">
            {camera ?
              <Link className="breadcrumbs__link" to={AppRoute.Root}>Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </Link> :
              <span className="breadcrumbs__link breadcrumbs__link--active">Каталог
              </span>}
          </li>

          {camera && (
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link breadcrumbs__link--active" to={AppRoute.Root}>{camera.name}
              </Link>
            </li>
          )}

        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
