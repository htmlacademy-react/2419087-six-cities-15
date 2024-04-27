import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import {OfferCardsType} from '../../types/offer';
import Cities from '../../components/cities/cities';
import CityFilter from '../../components/city-filter/city-filter';
// import OfferList from '../../components/offer-list/offer-list';

type mainProps = {
  offers: OfferCardsType;
}

function Main(props: mainProps): JSX.Element {
  const {offers} = props;

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 городов</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityFilter />
        </div>
        <Cities offers={offers}/>
      </main>
    </div>

  );
}

export default Main;
