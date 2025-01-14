import { Link, Outlet } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../hooks';
import { logoutAction } from '../../store/api-actions';
import { getFavoriteCount } from '../../store/slices/main-offers-process/selectors';
import { getAuthorizationStatus } from '../../store/slices/user-process/selectors';


function Layout() : JSX.Element {
  const favoriteCount = useAppSelector(getFavoriteCount);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();
  
  return(
    <div className="page page--favorites-empty">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={AppRoute.Root}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorite}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{favoriteCount}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login} onClick={() => dispatch(logoutAction())}>
                    <span className="header__signout">{authorizationStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sing in' }</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet/>
      <footer className="footer">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Layout;

