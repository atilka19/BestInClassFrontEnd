import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {News} from '../Shared/models/News';
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
export class NewsService {
  apiURL = environment.apiEndPoint + '/api/news';

  constructor(private http: HttpClient, private authService: AuthenticationService) { }

  getNews(currentPage: number, itemsPrPage: number): Observable<PagedList<News>> {
      const params = new HttpParams()
      .set('currentPage', currentPage.toString())
      .set('itemsPrPage', itemsPrPage.toString());
    return this.http.get<PagedList<News>>(this.apiURL, {params: params});
  }

  addNews(news: News): Observable<News> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer' + this.authService.getToken());

    return this.http.post<News>(this.apiURL, news, httpOptions);
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
