export enum AppRoute {
  Root = '/',
  Offer = '/offer/:id',
  Login = '/login',
  Favorites = '/favorites',
}

export const Cities = [
  'Amsterdam',
  'Brussels',
  'Cologne',
  'Dusseldorf',
  'Hamburg',
  'Paris',
] as const;

export enum OfferSortList {
  Default = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  RatingHighToLow = 'Top rated first'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
