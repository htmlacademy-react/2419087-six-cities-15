import { useParams } from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
// import ReviewForm from '../../components/review-form/review-form';
// import ReviewList from '../../components/review-list/review-list';
import Reviews from '../../components/reviews/reviews';
import { OfferPages, OfferPage } from '../../types/offer-page';
import NotFound from '../not-found/not-found';
import { AuthorizationStatus } from '../../const';
import { CITY, POINTS } from '../../mocks/location';
import {OfferCardsType} from '../../types/offer';
import OfferCard from '../../components/offer-card/offer-card';
import OfferList from '../../components/offer-list/offer-list';

type offerPageProps = {
  offerPages: OfferPages;
  authorizationStatus: AuthorizationStatus;
  naerOffers: OfferCardsType;
}

function Offer(props: offerPageProps): JSX.Element {
  const { id } = useParams();
  const {offerPages, authorizationStatus, naerOffers} = props;


  const currentOffer: OfferPage | undefined = offerPages.find((offer: OfferPage) => offer.id === id);

  if (!currentOffer) {
    return (
      <NotFound type='offer'/>
    );
  }

  const { title, type, price, images, isFavorite, isPremium, rating, listinside } = currentOffer;

  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Предложения</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((item, index) => {
                const keyValue = `${index}-${item}`;
                return (
                  <div key={keyValue} className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={item}
                      alt="Photo studio"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium ? (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                ) : null
              }

              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                {/* offer__bookmark-button--active */}
                {/* <button className="offer__bookmark-button button" type="button"> */}
                <button className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: '80%' }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">Apartment</li>
                <li className="offer__feature offer__feature--bedrooms">
              3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
              Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {listinside.map((el) => <li key={el.id} className="offer__inside-item">{el.item}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                A quiet cozy and picturesque that hides behind a a river by the
                unique lightness of Amsterdam. The building is green and from
                18th century.
                  </p>
                  <p className="offer__text">
                An independent House, strategically located between Rembrand
                Square and National Opera, but where the bustle of the city
                comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">1</span>
                </h2>
                <Reviews isAuth={authorizationStatus === AuthorizationStatus.Auth}/>

              </section>
            </div>
          </div>
          {/* <Map classWrapper={'offer'} city={CITY} points={POINTS}/> */}
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
          Other places in the neighbourhood
            </h2>
            {
              <OfferList offers={naerOffers} className="near-places" classNameList="near-places__list"/>
            }
          </section>
        </div>
      </main>
    </div>

  );
}

export default Offer;
