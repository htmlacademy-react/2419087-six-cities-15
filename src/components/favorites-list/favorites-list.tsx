import { CityNameType } from '../../types/location';
import {Cities} from '../../const';
import FavoriteItem from '../favorite-Item/favorite-Item';
import { OfferCardsType } from '../../types/offer';

type favoritePageProps = {
  favoriteList: OfferCardsType;
}

function FavoritesList({favoriteList}: favoritePageProps): JSX.Element {

  const filterOfferByCity = (city: CityNameType) => favoriteList.filter((item) => item.city.name === city);


  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {
          Cities.map((city) => {
            const sortedCards = filterOfferByCity(city);
            if (sortedCards.length) {
              return <FavoriteItem key={city} sortedCards={sortedCards} city={city}/>;
            }
          })
        }
      </ul>
    </section>
  );

}

export default FavoritesList;


