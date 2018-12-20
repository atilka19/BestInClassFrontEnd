import {Review} from './Review';

export interface PagedList <T> {

  list: T[];
  count: number;
}
