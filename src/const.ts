export enum AppRoute {
  Root = '/',
  Camera = '/cameras',
  Catalog = '/catalog',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Catalog = '/catalog',
}

export enum NameSpace {
  CamerasData = 'CAMERASDATA',
  PromoData = 'PROMODATA',
  CurrentCamera = 'CURRENTCAMERA',
}

export const MAX_RATING = 5;

export enum Tab {
  Description = 'Description',
  Specification = 'Specification',
}

export const DEFAULT_PAGE = 1;
export const MAX_CARDS_ON_PAGE = 9;
export const PAGE_COUNTER_STEP = 1;
