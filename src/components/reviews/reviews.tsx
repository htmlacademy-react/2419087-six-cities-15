import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';

type reweiwProps = {
  isAuth: boolean;
 }

function Reviews({isAuth}: reweiwProps): JSX.Element {
  return (
    <>
      <ReviewList />
      {isAuth && <ReviewForm />}
      {!isAuth && <p>Только авторизированные пользователи могут оставлять комментарий</p>}
    </>
  );
}

export default Reviews;
