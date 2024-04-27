import { FC, ChangeEventHandler, useState, Fragment } from 'react';

type TChangeHandler = ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;


// function ReviewForm(): JSX.Element | null {
const ReviewForm: FC = () => {
  const [review, setReview] = useState({rating: 0, review: ''});


  const handleChange:TChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    setReview({...review, [name]: value});
  };

  const rating = [
    {value: 5, name: 'perfect'},
    {value: 4, name: 'good'},
    {value: 3, name: 'not bad'},
    {value: 2, name: 'badly'},
    {value: 1, name: 'terribly'},
  ];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
                Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {rating.map(({value, name}) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={name}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>

          </Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={''}
        onChange={handleChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                  your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={review.rating === 0 || review.review.length < 50}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
export default ReviewForm;
