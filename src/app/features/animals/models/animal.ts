import {AnimalType} from './animal-type';

export interface Animal {
  name: string;
  type: AnimalType;
  imageUrl: undefined | null | string;
  description: string;
}
