import OfferCard from '../offer-card/offer-card';
import {CityNameType} from '../../types/location';
import { OfferCardsType } from '../../types/offer';

interface FavoriteItemProps {
  sortedCards: OfferCardsType;
  city: CityNameType;
}

function FavoriteItem({sortedCards, city}:FavoriteItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items" data-testid='favorite-item-container'>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {sortedCards.map((card) => <OfferCard card={card} key={card.id} className='favorites'/>)}
      </div>
    </li>
  );
}

export default FavoriteItem;
