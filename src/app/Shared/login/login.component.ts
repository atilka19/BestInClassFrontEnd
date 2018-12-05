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

  constructor(private router: Router, private _authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    this._authService.login(this.model.username, this.model.password).subscribe(
      success => {
        window.alert('Login Successful!');
        window.location.reload();
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

  logout(): Promise<boolean> {
    this.loggedin = false;
    this._authService.logout();
    return this.router.navigateByUrl('/');
  }

  getisAdmin(): boolean {
    return this._authService.getIsAdmin();
  }

  getToken(): string {
    return this._authService.getToken();
  }
}
