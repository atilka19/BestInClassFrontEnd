import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Car} from '../Shared/models/Car';
import {News} from '../Shared/models/News';
import {environment} from '../../environments/environment';
import {PagedList} from '../Shared/models/PagedList';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiURL = environment.apiEndPoint + '/api/car';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getCars(currentPage: number, itemsPrPage: number): Observable<PagedList<Car>> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());

    // @ts-ignore
    return this.http.get<PagedList<Car>>(this.apiURL, {params: params});
  }

  getCarByID(id: number): Observable<Car> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<Car>(this.apiURL + '/' + id, httpOptions);
  }

  addCar(car: Car): Observable<Car> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.post<Car>(this.apiURL, car, httpOptions);
  }

  deleteCar(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(this.apiURL + '/' + id, httpOptions);
  }

  updateCar(car: Car): Observable<Car> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.put<Car>(this.apiURL + '/' + car.id, car, httpOptions);
  }
}
