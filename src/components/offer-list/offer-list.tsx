import classNames from 'classnames';
import OfferCard from '../../components/offer-card/offer-card';
import {OfferCardsType} from '../../types/offer';

type MainProps = {
  offers: OfferCardsType;
  className?: string;
  classNameList?: string;
  onListItemHover?: (listItemName: string) => void;
}

function OfferList(props: MainProps): JSX.Element {
  const {offers, onListItemHover, className, classNameList} = props;

  return (
    <div
      className={
        classNames({
          [`${classNameList}`]: classNameList,
          'places__list tabs__content': true,
        })
      }
    >
      {offers.map((offer) => (
        <OfferCard
          card={offer}
          className={className}
          onMouseEnter={onListItemHover}
          key={offer.id}
        />
      ))}
    </div>
  );
}

export default OfferList;
