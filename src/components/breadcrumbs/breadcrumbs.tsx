import { Camera } from '../../types/types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type QuestCardProps = {
  camera: Camera | null;
}

function Breadcrumbs(props: QuestCardProps): JSX.Element {
  const { camera } = props;
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="/">Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </a>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">Каталог {/* ФИГМА - каталог подсвечен и ссылка при нахождении на странице камеры!!! */}
              {camera && (
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              )}
            </span>
          </li>
          {camera && (
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link breadcrumbs__link--active" to={AppRoute.Root}>
                {camera.name}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
