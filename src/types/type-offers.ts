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
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: string;
  city: {
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    }
    name: string;
  }
  isFavourite: boolean;
  isPremium: boolean;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
  previewImage: string;
  title: string;
  rating: number;
  type: string;
  price: number;
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
