import { useEffect, useState, FormEvent, useCallback, Fragment } from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '../../hooks/hooks';

import { postReviewAction, fetchReviewsAction } from '../../store/api-action';

import { Camera, ReviewPost } from '../../types/types';

import { MAX_RATING, DEFAULT_RATING, RatingName } from '../../const';

ReactModal.defaultStyles = {};

type ProductReviewModalProps = {
  isReviewModalOpen: boolean;
  setReviewModalOpen: (value: boolean) => void;
  setReviewSuccessModalOpen: (value: boolean) => void;
  camera: Camera;
};

function ProductReviewModal(props: ProductReviewModalProps): JSX.Element {

  const { isReviewModalOpen, setReviewModalOpen, setReviewSuccessModalOpen, camera } = props;

  const dispatch = useAppDispatch();

  const [rating, setRating] = useState(DEFAULT_RATING);

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<ReviewPost>({ mode: 'all' });

  const submitHandler = handleSubmit((reviewPost) => {
    const formData = {
      ...reviewPost,
      cameraId: camera.id,
      rating: Number(reviewPost.rating),
    };

    dispatch(postReviewAction(formData))
      .then(() => {
        dispatch(fetchReviewsAction(String(camera.id)));
      })
      .then(() => {
        closeModal();
      })
      .then(() => {
        setReviewSuccessModalOpen(true);
      });
  });

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    submitHandler(evt);
  };

  const closeModal = useCallback(() => {
    setReviewModalOpen(false);
  }, [setReviewModalOpen]);

  const handleEscClick = useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal],
  );

  useEffect(() => {
    document.addEventListener('keyup', handleEscClick);

    return () => {
      document.removeEventListener('keyup', handleEscClick);
    };
  }, [handleEscClick]);

  useEffect(() => {
    if (isReviewModalOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isReviewModalOpen]);

  return (
    <ReactModal isOpen={isReviewModalOpen} ariaHideApp={false}>
      <div className="modal is-active">
        <div className="modal__wrapper">
          <div className="modal__overlay" onClick={closeModal}></div>
          <div className="modal__content">
            <p className="title title--h4">???????????????? ??????????</p>
            <div className="form-review">

              <form method="post" onSubmit={onSubmit}>
                <div className={errors?.rating ? 'form-review__rate is-invalid' : 'form-review__rate'}>
                  <fieldset className="rate form-review__item">
                    <legend className="rate__caption">
                      ??????????????
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </legend>
                    <div className="rate__bar">
                      <div className="rate__group">

                        {Array.from({ length: MAX_RATING }, (element, i) => (
                          <Fragment key={`star-${i + 1}`}>
                            <input className="visually-hidden" id={`star-${MAX_RATING - i}`} type="radio" {...register('rating', { required: true })} value={MAX_RATING - i} onChange={() => setRating(MAX_RATING - i)}/>
                            <label className="rate__label" htmlFor={`star-${MAX_RATING - i}`} title={RatingName[MAX_RATING - i]}></label>
                          </Fragment>
                        ))}

                      </div>
                      <div className="rate__progress">
                        <span className="rate__stars">{rating}</span> <span>/</span>
                        <span className="rate__all-stars">5</span>
                      </div>
                    </div>
                    <p className="rate__message">?????????? ?????????????? ??????????</p>
                  </fieldset>

                  <div className={errors?.userName ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                    <label>
                      <span className="custom-input__label">
                        ???????? ??????
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input type="text" placeholder="?????????????? ???????? ??????" {...register('userName', { required: true })}/>
                    </label>
                    <p className="custom-input__error">?????????? ?????????????? ??????</p>
                  </div>

                  <div className={errors?.advantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                    <label>
                      <span className="custom-input__label">
                        ??????????????????????
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input type="text" placeholder="???????????????? ???????????????????????? ????????????" {...register('advantage', { required: true })}/>
                    </label>
                    <p className="custom-input__error">?????????? ?????????????? ??????????????????????</p>
                  </div>

                  <div className={errors?.disadvantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                    <label>
                      <span className="custom-input__label">
                        ????????????????????
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <input type="text" placeholder="?????????????? ???????????????????? ????????????" {...register('disadvantage', { required: true })}/>
                    </label>
                    <p className="custom-input__error">?????????? ?????????????? ????????????????????</p>
                  </div>

                  <div className={errors?.review ? 'custom-textarea form-review__item is-invalid' : 'custom-textarea form-review__item'}>
                    <label>
                      <span className="custom-textarea__label">
                        ??????????????????????
                        <svg width="9" height="9" aria-hidden="true">
                          <use xlinkHref="#icon-snowflake"></use>
                        </svg>
                      </span>
                      <textarea placeholder="???????????????????? ?????????? ???????????? ??????????????"
                        {...register('review', {
                          required: '?????????? ???????????????? ??????????????????????',
                          minLength: { value: 5, message: '?????????????? 5 ????????????????' },
                        })}
                      >
                      </textarea>
                    </label>
                    {errors?.review && (<div className="custom-textarea__error">{String(errors.review.message)}</div>)}
                  </div>
                </div>

                <button className="btn btn--purple form-review__btn" type="submit" disabled={!isValid}>
                  ?????????????????? ??????????
                </button>

              </form>
            </div>

            <button className="cross-btn" type="button" aria-label="?????????????? ??????????" onClick={closeModal}>
              <svg width="10" height="10" aria-hidden="true">
                <use xlinkHref="#icon-close"></use>
              </svg>
            </button>

          </div>
        </div>
      </div>
    </ReactModal>
  );
}

export default ProductReviewModal;
