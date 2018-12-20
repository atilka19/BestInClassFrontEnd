import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {Review} from '../Shared/models/Review';
import {PagedList} from '../Shared/models/PagedList';
import {environment} from '../../environments/environment';

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

  apiURL = environment.apiEndPoint + '/api/review';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getAllReviews(currentPage: number, itemsPrPage: number): Observable<PagedList<Review>> {
    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get <PagedList<Review>>(this.apiURL, {params: params});
  }

  getReviews(currentPage: number, itemsPrPage: number): Observable<PagedList<Review>> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    // @ts-ignore
    return this.http.get<PagedList<Review>>(this.apiURL, {params: params}, httpOptions );
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
