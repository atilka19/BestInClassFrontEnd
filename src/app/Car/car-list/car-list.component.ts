import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';
import {Car} from '../../Shared/models/Car';
import {CarService} from '../../Services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  _cars: Car[];
  constructor(private _authService: AuthenticationService,
              private _carService: CarService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this._carService.getCars().subscribe(list => {
        this._cars = list;
      }, error => {
        return error;
      }
    );
  }

  getIsAdmin(): boolean {
    return this._authService.getIsAdmin();
  }
}
