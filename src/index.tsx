import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { amsterdamOffers } from './mocks/amsterdam-offers';

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
