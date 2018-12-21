import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../Shared/models/User';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   apiURL = environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.apiURL + '/token', {username, password})
      .pipe(
      map(res => {
        const token = res && res.token;

        if (token) {
          localStorage.setItem('currentUser', JSON.stringify(
            {username: username, token: token, isAdmin: res.isAdmin}));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  getToken(): string {
    const  currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.token;
  }

  getUserName(): string {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser && currentUser.username;
  }

  getIsAdmin(): boolean {
    if (localStorage.getItem('currentUser') === null) {
      return false;
    } else {const currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (currentUser.isAdmin === true) {
        return true;
      } if (currentUser.isAdmin === false) {
        return false;
      }
    }
  }

  register(user: User): Observable<User> {

    return this.http.post<User>(this.apiURL + '/api/user', user);

  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}
