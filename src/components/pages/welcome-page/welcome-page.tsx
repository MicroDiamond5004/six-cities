import { Offer } from '../../../types/type-offers';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ListOfOffers from '../list-of-offers/list-of-offers';
import { createListOfOffers, changeCity, changeOffer, changeSortOffers, loadOffers, changeSortType, setLoadStatus } from '../../../store/action';
import Map from '../../../services/map/map';
import SortComponent from '../sort-component/sort-component';
import { SortTypes } from '../../../const';
import Spinner from '../../spinner/spinner';

function WelcomeScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.sortOffers);
  const city = useAppSelector((state) => state.city);
  const offer = useAppSelector((state) => state.currentOffer);
  const uploadOffers = useAppSelector((state) => state.offers);
  const isLoading = useAppSelector((state) => !state.loadStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uploadOffers) {
      dispatch(createListOfOffers(uploadOffers?.filter((offer) => offer.city.name === city)));
      dispatch(changeSortType('Popular'));
    }
  }, [uploadOffers, city]);

  console.log(offers, offer, city);

  const changeCityOffers = (evt: React.MouseEvent<HTMLLIElement>) => {
    const currentCity = evt.currentTarget.textContent;
    switch (currentCity) {
      case 'Paris':
        dispatch(changeCity(currentCity));
        break;
      case 'Cologne':
        dispatch(changeCity(currentCity));
        break;
      case 'Brussels':
        dispatch(changeCity(currentCity));
        break;
      case 'Amsterdam':
        dispatch(changeCity(currentCity));
        break;
      case 'Hamburg':
        dispatch(changeCity(currentCity));
        break;
      case 'Dusseldorf':
        dispatch(changeCity(currentCity));
        break;
      default:
        dispatch(changeCity('Paris'));
        break;
    }
  };

  function handleOnChangeSort(sortType: string) {
    if (sortType in SortTypes) {
      dispatch(changeSortOffers(sortType));
    }
  }

  const NameCities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
  return (
    <main className="page__main page__main--index">
      {isLoading && <Spinner />}
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {
              NameCities.map((currentCity, index) => {
                const id = `${city}-${index}-${Math.random()}`;
                return(
                  <li key={id} className="locations__item" onClick={changeCityOffers}>
                    <a className={city === currentCity ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
                      <span>{currentCity}</span>
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </section>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{offers?.length} places to stay in {city}</b>
            {<SortComponent handlerOnChangeSort={handleOnChangeSort} />}
            <div className="cities__places-list places__list tabs__content">
              {offers && <ListOfOffers offers={offers} handlerMouseOnOffer={(curOffer: Offer) => dispatch(changeOffer(curOffer))} />}
            </div>
          </section>
          <div className="cities__right-section">
            {/* <section className="cities__map map"></section> */}
            {offers && <Map offers={offers} cordinats={offers[0].city.location} currentPoint={offer || offers[0]} height={794} width={500}/>}
          </div>
        </div>
      </div>
    </main>
  );
}


export default WelcomeScreen;
