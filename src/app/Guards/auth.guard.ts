import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthenticationService} from '../Services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate() {
    if (this.authService.getToken()) {
      return true;
    }

    this.router.navigateByUrl('/login');
    return false;
  }
}
