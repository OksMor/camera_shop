import { datatype, commerce, image, date, name } from 'faker';
import { Camera, Promo, Review, ReviewPost } from '../types/types';

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

export const mockCameras = (): Camera[] =>
  Array.from({ length: 24 }, (element, i) => mockCamera());

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
