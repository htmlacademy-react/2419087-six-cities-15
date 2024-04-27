import {OfferCardsType} from '../types/offer';

export const offers: OfferCardsType = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: false,
    rating: 80,
    previewImage: 'img/apartment-01.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Cologne',
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
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Humburg',
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: false,
    rating: 80,
    previewImage: 'img/apartment-03.jpg',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartmentn',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.3809553943508,
        longitude: 4.939309666406198,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: false,
    rating: 80,
    previewImage: 'img/apartment-01.jpg',
  },
];
