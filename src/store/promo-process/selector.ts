import { Promo } from '../../types/types';
import { State } from '../../types/state';
import { NameSpace } from '../../const';

export const getPromo = (state: State): Promo | null => state[NameSpace.PromoData].promo;
