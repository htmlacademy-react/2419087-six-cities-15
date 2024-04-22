import { useEffect, useState } from 'react';
import OfferCard from '../../components/offer-card/offer-card';

import {OfferCardsType, OfferCardType} from '../../types/offer';
import { Nullable } from 'vitest';
type mainProps = {
  offers: OfferCardsType;
}

function OfferList({offers}: mainProps): JSX.Element {
  // const {offers} = props;
  const [activeOffer, setActiveOffer] = useState<Nullable<OfferCardType>>(null);
  const handleHover = (offer?: OfferCardType) => {
    setActiveOffer(offer || null);
  };

  useEffect(() => {
    // eslint-disable-next-line
    console.log('comonent did update');
  }, [offers]);

  useEffect (() => {
    // сработает при монтировании
    // eslint-disable-next-line
    console.warn(activeOffer);

    return () => {
      // eslint-disable-next-line
      console.log('component will unmount');
    };
  }, []);


  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard card={offer} key={offer.id} handleHover={handleHover} className='cities'/>
      ))}
    </div>
  );
}

export default OfferList;
