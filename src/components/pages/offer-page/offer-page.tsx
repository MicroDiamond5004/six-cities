import { Offer } from '../../../types/type-offers';
import { useLocation, Navigate} from 'react-router-dom';
import ListOfOffers from '../list-of-offers/list-of-offers';
import FormCommentComponent from '../offer-page/comments/form-comment-component';
import Map from '../../service/map/map';
import { useState } from 'react';
import { useAppSelector } from '../../hooks';


function OfferScreen(): JSX.Element {
  const location = useLocation();

  const offers = useAppSelector((store) => store.listOfOffers)
  let offerId = -1;
  const [clickOnOffer, setOffer] = useState(offers[0]);
  for (let i = 0; i < offers.length; i++) {
    if (offers[i].id === location.pathname.split('/')[2]) {
      offerId = i;
      break;
    }
  }

  if (offerId === -1) {
    return <Navigate to={'/404'}/>;
  }

  const currentOffer = offers[offerId];

  // const {photos, title, rating: offerRating, type, bedrooms, maxPersons, cost, include, host} = currentOffer;
  const otherOffers = offers.slice(0, offerId).concat(offers.slice(offerId + 1, offers.length)).slice(0, 3);
  return (
    <main className="page__main page__main--offer">
      {/* <section className="offer">
        <div className="offer__gallery-container container">
          <div className="offer__gallery">
            {photos.map((photo, uniqId) => {
              const curId = `${photo}-${uniqId}`;
              return(
                <div key={curId} className="offer__image-wrapper">
                  <img className="offer__image" src={photo} alt="Photo studio"/>
                </div>
              );
            })}
          </div>
        </div>
        <div className="offer__container container">
          <div className="offer__wrapper">
            <div className="offer__mark">
              <span>Premium</span>
            </div>
            <div className="offer__name-wrapper">
              <h1 className="offer__name">
                {title}
              </h1>
              <button className="offer__bookmark-button button" type="button">
                <svg className="offer__bookmark-icon" width="31" height="33">
                  <use href="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars">
                <span style={{width: `${offerRating * 20}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="offer__rating-value rating__value">{offerRating}</span>
            </div>
            <ul className="offer__features">
              <li className="offer__feature offer__feature--entire">
                {type}
              </li>
              <li className="offer__feature offer__feature--bedrooms">
                {bedrooms} Bedrooms
              </li>
              <li className="offer__feature offer__feature--adults">
                Max {maxPersons} adults
              </li>
            </ul>
            <div className="offer__price">
              <b className="offer__price-value">&euro;{cost}</b>
              <span className="offer__price-text">&nbsp;night</span>
            </div>
            <div className="offer__inside">
              <h2 className="offer__inside-title">What&apos;s inside</h2>
              <ul className="offer__inside-list">
                {include.map((item) => {
                  const curId = item;
                  return (
                    <li key={curId} className="offer__inside-item">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="offer__host">
              <h2 className="offer__host-title">Meet the host</h2>
              <div className="offer__host-user user">
                <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="offer__avatar user__avatar" src={host.icon} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="offer__user-name">
                  {host.name}
                </span>
                <span className="offer__user-status">
                  Pro
                </span>
              </div>
              <div className="offer__description">
                <p className="offer__text">
                  {host.text}
                </p>
              </div>
            </div>
            <section className="offer__reviews reviews">
              {
                <FormCommentComponent/>
              }
            </section>
          </div>
        </div>
        {<Map offers={otherOffers} cordinats={clickOnOffer.map} currentPoint={clickOnOffer} height={400} width={null}/>}
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {<ListOfOffers offers={otherOffers} handlerMouseOnOffer={(curOffer: Offer) => setOffer(curOffer)}/>}
          </div>
        </section>
      </div> */}
    </main>
  );
}

export default OfferScreen;
