import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';
import {CarService} from '../../Services/car.service';
import {Car} from '../../Shared/models/Car';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-car-by-id',
  templateUrl: './car-by-id.component.html',
  styleUrls: ['./car-by-id.component.css']
})
export class CarByIdComponent implements OnInit {
  ID: number;
  car: Car;
  tiles: Tile[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _carService: CarService,
              private _authService: AuthenticationService) { }

  ngOnInit() {
    this.ID = +this.route.snapshot.paramMap.get('id');
    this._carService.getCarByID(this.ID).subscribe( carFromCall => {
      this.car = carFromCall;
      console.log(carFromCall);
      this.fillBoxes();
    });
  }

 fillBoxes() {
   this.tiles = [
     {text: '', cols: 2, rows: 2, color: this.car.picture},
     {text: this.car.make, cols: 1, rows: 1, color: ''},
     {text: this.car.model, cols: 1, rows: 1, color: ''},
     {text: this.car.type, cols: 1, rows: 1, color: ''},
     {text: this.car.year.toString(), cols: 1, rows: 1, color: ''}
   ];
 }
}
