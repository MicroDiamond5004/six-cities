export type AppartamentImages = string;

export type OfferInclude = string[];

export type Host = {
  icon: string;
  name: string;
  text: string;
}

export type OfferReview = Host & {
  offerId: string | number;
  rating: number;
  date: string;
}

export type OfferMap = {
  lat: number;
  lng: number;
}

export type Offer = {
  id: string;
  offerName: string;
  photos: AppartamentImages[];
  title: string;
  rating: number;
  type: string;
  bedrooms: number;
  maxPersons: number;
  cost: number;
  include: OfferInclude;
  host: Host;
  reviews: OfferReview[];
  map: OfferMap;
}

export type CitiesOffers = {
  Paris: Offer[];
  Cologne: Offer[];
  Brussels:Offer[];
  Amsterdam: Offer[];
  Hamburg: Offer[];
  Dusseldorf: Offer[];
}

export type Comments = {
  rating: number;
  text: string;
}
