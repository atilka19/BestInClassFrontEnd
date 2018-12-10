import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private _authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const user = this.registerForm.value;
    this._authService.register(user).subscribe(() =>
      this.router.navigateByUrl('/'));
  }

}
