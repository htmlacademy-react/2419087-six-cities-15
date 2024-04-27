import { AppRoute } from '../const';

export const getCardPath = (id: string) => AppRoute.Offer.slice(0, AppRoute.Offer.indexOf(':id')) + id;
