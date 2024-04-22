import { Helmet } from 'react-helmet-async';
import FavoritesList from '../../components/favorites-list/favorites-list';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { OfferCardsType } from '../../types/offer';

type favoritePageProps = {
  favoriteList: OfferCardsType;
}

function Favorites({favoriteList}: favoritePageProps): JSX.Element {
  const isList = favoriteList.length > 0;
  return (
    <div className="page">
      <Helmet>
        <title>6 городов. Избранное</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {isList && <FavoritesList favoriteList={favoriteList}/>}
          {!isList && <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>

  );
}

export default Favorites;
