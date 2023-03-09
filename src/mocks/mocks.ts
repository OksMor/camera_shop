import { datatype, commerce, image, date, name } from 'faker';
import { Camera, Promo, Review, ReviewPost } from '../types/types';
import thunk from 'redux-thunk';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { MAX_REVIEW_COUNT } from '../const';

export const mockCamera = (): Camera => ({
  id: datatype.number(),
  name: commerce.productName(),
  vendorCode: datatype.string(),
  type: datatype.string(),
  category: datatype.string(),
  description: datatype.string(),
  level: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  price: datatype.number(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
  reviewCount: datatype.number(),
});

// export const mockCameras: Camera[] = Array.from({length: 24}, mockCamera);

export const mockCameras = (): Camera[] =>
  Array.from({ length: 24 }, (element, i) => mockCamera());

// export const mockSimilarCameras: Camera[] = Array.from({length: 24}, mockCamera);

export const mockSimilarCameras = (): Camera[] =>
  Array.from({ length: 12 }, (element, i) => mockCamera());

export const mockPromoCamera = (): Promo => ({
  id: datatype.number(),
  name: commerce.productName(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
});

export const mockReview = (): Review => ({
  id: datatype.string(),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  createAt: date.past().toISOString(),
  cameraId: datatype.number(),
});

// export const mockReviews: Review[] = Array.from({length: 24},mockReview);

export const mockReviews = (): Review[] =>
  Array.from({ length: 6 }, (element, i) => mockReview());

export const mockReviewPost = (): ReviewPost => ({
  cameraId: datatype.number(),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
});

const cameras = mockCameras();
const camera = mockCamera();
const promo = mockPromoCamera();
const similarCameras = mockSimilarCameras();
const reviews = mockReviews();

const mockStore = configureMockStore([thunk]);

// export const store = mockStore({
//   CamerasData: cameras,
//   CurrentCamera: camera,
//   PromoData: promo,
//   SimilarCameras: similarCameras,
//   ReviewsData: reviews,
//   App: MAX_REVIEW_COUNT,
// });

export const store = mockStore({
  // CamerasData: { cameras: cameras, isLoading: true, hasError: false },
  CamerasData: { cameras: cameras, isLoading: true },
  CurrentCamera: { camera: camera, isLoading: true },
  PromoData: { promo: promo, isLoading: true },
  SimilarCameras: { similarCameras: similarCameras, isLoading: true },
  ReviewsData: { reviews: reviews, isDataLoading: true },
  App: { reviewsOpen: MAX_REVIEW_COUNT }
});
