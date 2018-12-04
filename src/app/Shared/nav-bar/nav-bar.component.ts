import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showLogin(): void {
    const d = document.getElementById('default');
    const l = document.getElementById('Login');
    d.style.display = 'none';
    l.style.display = 'block';
  }

  showRegister(): void {
    const d = document.getElementById('default');
    const r = document.getElementById('Register');
    d.style.display = 'none';
    r.style.display = 'block';
  }
}
