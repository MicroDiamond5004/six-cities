import { Offer } from '../../../types/type-offers';
import { Link } from 'react-router-dom';

type offerProps = {
  offer: Offer;
  onChangeOffer: () => void;
};

function TabOfferScreen ({offer, onChangeOffer}: offerProps) : JSX.Element {
  const {id, price, rating, title, type, previewImage} = offer;
  return (
    <article key={id} className="cities__card place-card" onMouseOver={onChangeOffer}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offers/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{'width': `${Math.round(rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offers/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type.at(0)?.toUpperCase().concat(type.slice(1))}</p>
      </div>
    </article>
  );
}

export default TabOfferScreen;
