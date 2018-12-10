import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewsService} from '../../Services/news.service';
import {News} from '../../Shared/models/News';
import {AuthenticationService} from '../../Services/authentication.service';

@Component({
  selector: 'app-news-by-id',
  templateUrl: './news-by-id.component.html',
  styleUrls: ['./news-by-id.component.css']
})
export class NewsByIdComponent implements OnInit {
  ID: number;
  news: News;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private _newsService: NewsService,
              private _authService: AuthenticationService) { }

  ngOnInit() {
    this.ID = +this.route.snapshot.paramMap.get('id');
    this._newsService.getNewsByID(this.ID).subscribe( newsFromCall => {
      this.news = newsFromCall;
      console.log(newsFromCall);
    });
  }

  deleteNews(id: number) {
    this._newsService.deleteNews(id).subscribe(msg => {
      window.alert('Element Successfully Deleted!');
      this.router.navigateByUrl('/');
    });
  }
  getIsAdmin(): boolean {
    return this._authService.getIsAdmin();
  }

}
