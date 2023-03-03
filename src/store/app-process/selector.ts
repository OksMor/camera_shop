// import { Review } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

// export const getReviews = (state: State): Review[] => state[NameSpace.ReviewsData].review;

export const getReviewsOpened = (state: State): number => state[NameSpace.App].reviewsOpen;
