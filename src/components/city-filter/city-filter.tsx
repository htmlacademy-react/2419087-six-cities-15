import {useState} from 'react';
import {Cities, DEFAULT_CITY} from '../../const';
import classNames from 'classnames';
import {CityNameType} from '../../types/location';


function CityFilter(): JSX.Element {

  const [currentCity, setCurrentCity] = useState<CityNameType | null>(DEFAULT_CITY);

  const handleCityClick = (event:React.MouseEvent<HTMLElement>, city: CityNameType) => {
    event.preventDefault();

    setCurrentCity(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          Cities.map((city) =>
            (
              <li className="locations__item" key={city} data-testid='city-filter-item'>
                <a
                  className={
                    classNames('locations__item-link tabs__item', {'tabs__item--active': currentCity === city})
                  }
                  href="#"
                  onClick={(event) => handleCityClick(event, city)}
                >
                  <span>{city}</span>
                </a>
              </li>
            )
          )
        }
      </ul>
    </section>
  );
}

export default CityFilter;
