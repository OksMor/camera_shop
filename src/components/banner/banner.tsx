import { getPromo } from '../../store/promo-process/selector';
import { useAppSelector } from '../../hooks/hooks';

function Banner(): JSX.Element {

  const promo = useAppSelector(getPromo);

  return promo ? (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet={`${process.env.PUBLIC_URL}/${promo.previewImgWebp}, ${process.env.PUBLIC_URL}/${promo.previewImgWebp2x} 2x`} />
        <img src={`${process.env.PUBLIC_URL}/${promo.previewImg}`} srcSet={`${process.env.PUBLIC_URL}/${promo.previewImg2x} 2x`} width="1280" height="280" alt="баннер" />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{promo?.name}</span>
        <span className="banner__text">Профессиональная камера от&nbsp;известного производителя</span>
        <a className="btn" href="/">
          Подробнее
        </a>
      </p>
    </div>
  ) : <div className="banner"></div>;
}

export default Banner;
