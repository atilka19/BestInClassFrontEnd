import { Component, OnInit } from '@angular/core';
import {Review} from '../../Shared/models/Review';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../Services/authentication.service';
import {ReviewService} from '../../Services/review.service';
import {Car} from '../../Shared/models/Car';

@Component({
  selector: 'app-review-by-id',
  templateUrl: './review-by-id.component.html',
  styleUrls: ['./review-by-id.component.css']
})
export class ReviewByIdComponent implements OnInit {
  ID: number;
  review: Review;
  car: Car;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _reviewService: ReviewService,
              private _authService: AuthenticationService) { }

  ngOnInit() {
    this.ID = +this.route.snapshot.paramMap.get('id');
    this._reviewService.getReviewByID(this.ID).subscribe( newsFromCall => {
      this.review = newsFromCall;
      this.car = newsFromCall.car;
      console.log(newsFromCall);
      console.log(this.car);
    });
  }

}
