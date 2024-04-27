import {Cities} from '../const';

export interface LocationType {
  latitude: number;
  longitude: number;
  zoom: number;
}

// export interface Point {
//   id: string;
//   latitude: number;
//   longitude: number;
// }

export type CityNameType = typeof Cities[number];

// export interface CityType {
//   name: CityNameType;
//   location: LocationType;
// }
