import WelcomeScreen from '../pages/welcome-page/welcome-page';
import LoginScreen from '../pages/login-page/login-page';
import FavoritesScreen from '../pages/favorites-page/favorites-page';
import ErrorScreen from '../pages/error404-page/error404-page';
import Layout from '../layouts/layout';
import PrivateRoute from '../private-route/private-route';
import OfferScreen from '../pages/offer-page/offer-page';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Offer } from '../../types/type-offers';
import { Provider } from 'react-redux';
import { store } from '../../store';

type AppScreenProps = {
  favoriteCount: number;
  offers: Offer[];
}

function App({favoriteCount, offers}: AppScreenProps): JSX.Element {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Login}
            element={<LoginScreen />}
          />
          <Route path={AppRoute.Root} element={<Layout favoriteCount={favoriteCount}/>}>
            <Route
              index
              element={<WelcomeScreen/>}
            />
            <Route
              path={AppRoute.Favorite}
              element={
                <PrivateRoute
                  authorizationStatus={AuthorizationStatus.Auth}
                >
                  <FavoritesScreen offers={offers}/>
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Offer}
              element={<OfferScreen offers={offers} />}
            />
            <Route
              path='*'
              element={<ErrorScreen />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
