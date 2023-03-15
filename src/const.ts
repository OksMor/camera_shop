export enum AppRoute {
  Root = '/',
  Camera = '/cameras/:id',
  Catalog = '/catalog/:pageId',
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

export enum Tab {
  Description = 'Description',
  Specification = 'Specification',
}

export const DEFAULT_RATING = 0;
export const MAX_RATING = 5;

export enum Page {
  Default = 1,
  MaxCards = 9,
  CounterStep = 1,
}

export enum Slide {
  Default = 0,
  MaxCards = 3,
  CounterStep = 1,
}

export const MAX_REVIEW_COUNT = 3;

export const RatingName: { [key: number]: string } = {
  1: 'Ужасно',
  2: 'Плохо',
  3: 'Нормально',
  4: 'Хорошо',
  5: 'Отлично',
} as const;
