import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../Services/authentication.service';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';
import {Car} from '../../Shared/models/Car';
import {CarService} from '../../Services/car.service';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  _cars: Car[];
  loading: boolean;
  count: number;
  PE: PageEvent;

  constructor(private _authService: AuthenticationService,
              private _carService: CarService,
              private router: Router) { }

  ngOnInit() {
    this.PE = {
      pageIndex: 0,
      pageSize: 6,
      length: this.count
    };
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this._carService.getCars(this.PE.pageIndex + 1, this.PE.pageSize).subscribe(list => {
        this._cars = list.list;
        this.count = list.count;
        console.log(list);
        this.loading = false;
      }, error => {
        this.loading = false;
        return error;
      }
    );
  }

  getIsAdmin(): boolean {
    return this._authService.getIsAdmin();
  }

  changePage(event: PageEvent) {
    this.PE = event;
    this.refresh();
  }
}
