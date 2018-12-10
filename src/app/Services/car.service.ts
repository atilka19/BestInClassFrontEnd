import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Car} from '../Shared/models/Car';
import {News} from '../Shared/models/News';

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
  apiURL = 'https://localhost:44379/api/car';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getCars(): Observable<Car[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.get<Car[]>(this.apiURL, httpOptions);
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
