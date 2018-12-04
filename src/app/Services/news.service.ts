import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
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
export class NewsService {
  apiURL = 'https://localhost:44379/api/news';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getNews(): Observable<News[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.get<News[]>(this.apiURL, httpOptions);
  }

  addNews(news: News): Observable<News> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.post<News>(this.apiURL, httpOptions);
  }

  deleteNews(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.delete(this.apiURL + '/' + id, httpOptions);
  }

  getNewsByID(id: number): Observable<News> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authService.getToken());

    return this.http.get<News>(this.apiURL + '/' + id, httpOptions);
  }

  updateNews(news: News): Observable<News> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.put<News>(this.apiURL + '/' + news.id, news, httpOptions);
  }
}
