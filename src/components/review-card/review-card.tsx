import { Review } from '../../types/types';
import { MAX_RATING } from '../../const';

import dayjs from 'dayjs';
import 'dayjs/locale/ru';

type ReviewCardProps = {
  reviewCard: Review;
}

function ReviewCard(props: ReviewCardProps): JSX.Element {
  const { reviewCard } = props;

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{reviewCard.userName}</p>
        <time className="review-card__data" dateTime={reviewCard.createAt}>{dayjs(reviewCard.createAt).locale('ru').format('DD MMMM')}</time>
      </div>
      <div className="rate review-card__rate">
        {Array.from({length: MAX_RATING}, (_, index) => (
          <svg width="17" height="16" aria-hidden="true" key={index}>
            <use xlinkHref={`#icon-${index < reviewCard.rating ? 'full-' : ''}star`}></use>
          </svg>
        ))}
        <p className="visually-hidden">Оценка: {reviewCard.rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{reviewCard.advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{reviewCard.disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{reviewCard.review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewCard;
