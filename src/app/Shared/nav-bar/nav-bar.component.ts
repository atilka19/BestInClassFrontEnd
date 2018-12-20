import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
  }

  getIsAdmin(): boolean {
    return this._authService.getIsAdmin();
  }

  getUser(): string {
    return this._authService.getUserName();
  }

  getToken(): string {
    return this._authService.getToken();
  }

  logout(): Promise<boolean> {
    this._authService.logout();
    return this.router.navigateByUrl('/');
  }
}
