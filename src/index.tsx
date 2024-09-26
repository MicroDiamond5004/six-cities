import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { amsterdamOffers } from './mocks/amsterdam-offers';
import { store } from './store';
import { checkAuthAction, fetchOffersAction } from './services/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const enum Setting {
  FavoriteCount = 15,
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      favoriteCount={Setting.FavoriteCount}
      offers={amsterdamOffers}
    />
  </React.StrictMode>
);
