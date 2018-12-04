import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  loggedin = false;
  model: any = {};
  errormessage = '';
  showAdmin = false;

  constructor(private router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this._authService.login(this.model.username, this.model.password).subscribe(
      success => {
        if (this._authService.getIsAdmin() === true) {
          this.showAdmin = true;
        }
        window.alert('Login Successful!');
        this.loggedin = true;
        this.loading = false;
      }, error => {
        this.errormessage = error.message;
        this.loading = false;
      }
    );
  }

  getUserName(): string {
    return this._authService.getUserName();
  }

  logout(): void {
    this.loggedin = false;
    return this._authService.logout();
  }

  getisAdmin(): boolean {
    return this._authService.getIsAdmin();
  }

  getToken(): string {
    return this._authService.getToken();
  }
}
