export type OfferPage = {
  id: string;
  title: string;
  type: string;
  price: number;
  images: string[];
  city: {
    name: string;
    location: {
      latitude: number;
      longitude: number;
      zoom: number;
    };
  };
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  listinside: {
    id: string;
    item: string;
  }[];
}

export type OfferPages = OfferPage[];
