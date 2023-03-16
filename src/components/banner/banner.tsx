import { getPromo } from '../../store/promo-process/selector';
import { useAppSelector } from '../../hooks/hooks';
import { APIRoute, Tab } from '../../const';

function Banner(): JSX.Element {

  const promo = useAppSelector(getPromo);

  return promo ? (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`/${promo.previewImgWebp}, /${promo.previewImgWebp2x} 2x`} />
        <img src={`/${promo.previewImg}`} srcSet={`/${promo.previewImg2x} 2x`} width="1280" height="280" alt="баннер" />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{promo.name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <a className="btn" href={`${APIRoute.Cameras}/${promo.id}/${Tab.Description}`}>
          Подробнее
        </a>
      </p>
    </div>
  ) : <div className="banner"></div>;
}

export default Banner;
