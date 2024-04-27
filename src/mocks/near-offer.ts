import {OfferCardsType} from '../types/offer';

export const naerOffers: OfferCardsType = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    isFavorite: true,
    isPremium: false,
    rating: 80,
    previewImage: 'img/room.jpg',
  },
  {
    id: '2',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3609553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: false,
    rating: 80,
    previewImage: 'img/apartment-02.jpg',
  },
  {
    id: '3',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: true,
    rating: 80,
    previewImage: 'img/apartment-03.jpg',
  },
];
