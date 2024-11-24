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

export type PageOffer = {
    "id": string;
    "title": string;
    "type": string,
    "price": number;
    "city": {
      "name": string;
      "location": {
        "latitude": number;
        "longitude": number;
        "zoom": number;
      }
    },
    "location": {
      "latitude": number;
      "longitude": number;
      "zoom": number;
    },
    "isFavorite": boolean;
    "isPremium": boolean;
    "rating": number;
    "description": string;
    "bedrooms": number;
    "goods": string[],
    "host": {
      "name": string;
      "avatarUrl": string;
      "isPro": boolean;
    },
    "images": string[];
    "maxAdults": number;
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
