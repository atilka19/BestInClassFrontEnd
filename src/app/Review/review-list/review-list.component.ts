import { Component, OnInit } from '@angular/core';
import {Review} from '../../Shared/models/Review';
import {AuthenticationService} from '../../Services/authentication.service';
import {Router} from '@angular/router';
import {ReviewService} from '../../Services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  _reviews: Review[];

  constructor(private _authService: AuthenticationService,
              private _reviewService: ReviewService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this._reviewService.getReviews().subscribe(list => {
        this._reviews = list;
        console.log(list);
      }, error => {
        return error;
      }
    );
  }

}
