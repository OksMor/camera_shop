export enum AppRoute {
  Root = '/',
  Camera = '/cameras',
  Catalog = '/catalog',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Catalog = '/catalog',
  Reviews = '/reviews',
}

export enum NameSpace {
  CamerasData = 'CAMERASDATA',
  PromoData = 'PROMODATA',
  CurrentCamera = 'CURRENTCAMERA',
  SimilarCameras = 'SIMILARCAMERAS',
  ReviewsData = 'REVIEWSDATA',
  App = 'APP',
}

export const MAX_RATING = 5;

export enum Tab {
  Description = 'Description',
  Specification = 'Specification',
}

// !!!!!!!!!!! причесать имена

export const DEFAULT_PAGE = 1;
export const MAX_CARDS_ON_PAGE = 9;
export const PAGE_COUNTER_STEP = 1;

export const SLIDE_COUNTER_STEP = 1;
export const MAX_SLIDES_ON_PAGE = 3;
export const MIN_SLIDES_ON_PAGE = 0;
export const DEFAULT_SLIDE = 0;

export const MAX_REVIEW_COUNT = 3;

export const RatingName: { [key: number]: string } = {
  1: 'Ужасно',
  2: 'Плохо',
  3: 'Нормально',
  4: 'Хорошо',
  5: 'Отлично',
} as const;
