import { Promo } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getPromo = (state: State): Promo | null => state[NameSpace.PromoData].promo;

export const getIsPromoLoading = (state: State): boolean => state[NameSpace.PromoData].isLoading;
