import {OfferCardsType} from '../types/offer';

export const favoriteList: OfferCardsType = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    isFavorite: true,
    isPremium: true,
    rating: 80,
    previewImage: 'img/apartment-small-03.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    city: {
      name: 'Cologne',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: true,
    rating: 80,
    previewImage: 'img/apartment-small-04.jpg',
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    city: {
      name: 'Hamburg',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    isFavorite: false,
    isPremium: false,
    rating: 80,
    previewImage: 'img/apartment-small-03.jpg',
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartmentn',
    type: 'apartment',
    price: 180,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8,
      },
    },
    isFavorite: true,
    isPremium: false,
    rating: 80,
    previewImage: 'img/room-small.jpg',
  },
];

