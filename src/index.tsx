import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers } from './mocks/offers';

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
      offers={offers}
    />
  </React.StrictMode>
);
