export enum AppRoute {
  Login = '/login',
  Favorite = '/favorites',
  Root = '/',
  Offer = '/offers/:id',
  Error = '/404',
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum OfferType {
  Studio = 'studio',
  Apartament = 'apartament'
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const SortTypes = {
  High_Rating: 'High_Rating',
  High_Price: 'High_Price',
  Low_Price: 'Low_Price',
  Popular: 'Popular',
}

export const TIMEOUT_SHOW_ERROR = 2000;
