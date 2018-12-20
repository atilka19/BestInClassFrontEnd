import {Review} from './Review';

export class Car {
  id?: number;
  make?: string;
  model?: string;
  year?: number;
  type?: string;
  picture?: string;
  reviews?: Review[];
}
