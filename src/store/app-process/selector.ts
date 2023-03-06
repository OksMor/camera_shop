import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getReviewsOpened = (state: State): number => state[NameSpace.App].reviewsOpen;
