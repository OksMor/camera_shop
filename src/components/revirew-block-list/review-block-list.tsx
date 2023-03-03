import { Review } from '../../types/types';

import ReviewCard from '../review-card/review-card';

type ReviewBlockListProps = {
  reviews: Review[];
}

function ReviewBlockList(props: ReviewBlockListProps): JSX.Element {
  const { reviews } = props;

  return (
    <div className="review-block__list">
      {reviews.map((review) => <ReviewCard key={review.id} reviewCard={review} />)}
    </div>
  );
}

export default ReviewBlockList;
