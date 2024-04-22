import { UserType } from '../../types/user';

export type reviewProps = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

export const comments: reviewProps[] = [
  {
    id: '1',
    comment: ' A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: 'April 2019',
    rating: 80,
    user: {
      name: 'Max',
      avatarUrl: 'img/avatar-max.jpg',
    }
  },
];
