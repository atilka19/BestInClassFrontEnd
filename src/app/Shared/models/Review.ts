import {Car} from './Car';

export class Review {
  id: number;
  car: Car;
  header: string;
  body: string;
  ratingEveryday: number;
  ratingWeekend: number;
  ratingPracticality: number;
  ratingExterior: number;
  ratingInterior: number;
  ratingOverall: number;
}
