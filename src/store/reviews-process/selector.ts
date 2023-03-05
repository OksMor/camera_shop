import { Review } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getReviews = (state: State): Review[] => state[NameSpace.ReviewsData].reviews;

export const getIsReviewsLoading = (state: State): boolean => state[NameSpace.ReviewsData].isLoading;
