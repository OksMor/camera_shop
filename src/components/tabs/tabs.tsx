import { Link, useParams } from 'react-router-dom';
import classnames from 'classnames';
import { Camera } from '../../types/types';

import { Tab } from '../../const';

type Props = {
  camera: Camera;
};

const Tabs = ({ camera }: Props) => {

  const { about } = useParams();

  const getControlClassName = (aboutTabsTitle: string) => classnames(
    'tabs__control',
    { 'is-active': about === aboutTabsTitle }
  );

  const getElementClassName = (aboutTabsTitle: string) => classnames(
    'tabs__element',
    { 'is-active': about === aboutTabsTitle }
  );

  return (
    <div className="tabs product__tabs">

      <div className="tabs__controls product__tabs-controls">

        <Link to={camera.id ? `/cameras/${camera.id}/${Tab.Specification}` : '/'}>
          <button className={getControlClassName(Tab.Specification)} type="button">
            Характеристики
          </button>
        </Link>

        <Link to={camera.id ? `/cameras/${camera.id}/${Tab.Description}` : '/'}>
          <button className={getControlClassName(Tab.Description)} type="button">
            Описание
          </button>
        </Link>

      </div>

      <div className="tabs__content">

        <div className={getElementClassName(Tab.Specification)}>

          <ul className="product__tabs-list">
            <li className="item-list">
              <span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{camera.vendorCode}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Категория:</span>
              <p className="item-list__text">{camera.category}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{camera.type}</p>
            </li>
            <li className="item-list">
              <span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{camera.level}</p>
            </li>
          </ul>

        </div>

        <div className={getElementClassName(Tab.Description)}>
          <div className="product__tabs-text">
            <p>{camera.description}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Tabs;
