import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

function FavoritesScreen(): JSX.Element {
  const navigate = useNavigate();
  const offers = useAppSelector((store) => store.listOfOffers);

  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>Amsterdam</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {offers.map((offer) => {
                  const {id, previewImage, title, rating: offerRating, type, price} = offer;
                  return(
                    <article className="favorites__card place-card" key={id}>
                      <div className="place-card__mark">
                        <span>Premium</span>
                      </div>
                      <div className="favorites__image-wrapper place-card__image-wrapper">
                        <a onClick={() => navigate(`/offers/${id}`)}>
                          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image"/>
                        </a>
                      </div>
                      <div className="favorites__card-info place-card__info">
                        <div className="place-card__price-wrapper">
                          <div className="place-card__price">
                            <b className="place-card__price-value">&euro;{price}</b>
                            <span className="place-card__price-text">&#47;&nbsp;night</span>
                          </div>
                          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                            <svg className="place-card__bookmark-icon" width="18" height="19">
                              <use xlinkHref="#icon-bookmark"></use>
                            </svg>
                            <span className="visually-hidden">In bookmarks</span>
                          </button>
                        </div>
                        <div className="place-card__rating rating">
                          <div className="place-card__stars rating__stars">
                            <span style={{'width': `${offerRating * 20}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <h2 className="place-card__name">
                          <a onClick={() => navigate(`/offer/${id}`)}>{title}</a>
                        </h2>
                        <p className="place-card__type">{type}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default FavoritesScreen;
