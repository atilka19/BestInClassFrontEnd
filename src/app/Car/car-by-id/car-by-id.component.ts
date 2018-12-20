import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';
import {CarService} from '../../Services/car.service';
import {Car} from '../../Shared/models/Car';
import {Review} from '../../Shared/models/Review';
import { Rating } from 'material-ui-rating'
import {ReviewService} from '../../Services/review.service';
import {FormControl, FormGroup} from '@angular/forms';

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
  reviews: Review[];
  loading: boolean;

  reviewForm = new FormGroup( {
    header: new FormControl(''),
    body: new FormControl(''),
    ratingEveryday: new FormControl(''),
    ratingWeekend: new FormControl(''),
    ratingPracticality: new FormControl(''),
    ratingExterior: new FormControl(''),
    ratingInterior: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _carService: CarService,
              private _authService: AuthenticationService,
              private _reviewService: ReviewService) { }

  ngOnInit() {
    this.loading = true;
    this.ID = +this.route.snapshot.paramMap.get('id');
    this._carService.getCarByID(this.ID).subscribe( carFromCall => {
      this.car = carFromCall;
      this.reviews = carFromCall.reviews;
      console.log(this.reviews);
      this.loading = false;
    });
  }

  submit() {
    const review = this.reviewForm.value;
    const car = new Car();
    car.id = this.ID;
    review.car = car;
    this._reviewService.addReview(review).subscribe(() =>
      this.router.navigateByUrl('/'));
    console.log(review);
  }
}
