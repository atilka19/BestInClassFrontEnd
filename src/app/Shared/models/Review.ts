import {Car} from './Car';

export class Review {
  id: number;
  car: Car;
  header: string;
  body: string;
  ratingEveryDay: number;
  ratingWeekend: number;
  ratingPracticality: number;
  ratingExterior: number;
  ratingInterior: number;
  ratingOverAll: number;
}
