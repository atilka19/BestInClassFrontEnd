import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Review} from '../Shared/models/Review';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  apiURL = 'https://localhost:44379/api/review';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getReviews(): Observable<Review[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.get<Review[]>(this.apiURL, httpOptions);
  }

  getReviewByID(id: number): Observable<Review> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<Review>(this.apiURL + '/' + id, httpOptions);
  }

  addReview(review: Review): Observable<Review> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.post<Review>(this.apiURL, review, httpOptions);
  }

  deleteReview(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(this.apiURL + '/' + id, httpOptions);
  }

  updateReview(review: Review): Observable<Review> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.put<Review>(this.apiURL + '/' + review.id, review, httpOptions);
  }
}
