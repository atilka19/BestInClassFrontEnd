import { Component, OnInit } from '@angular/core';
import {News} from '../../Shared/models/News';
import {AuthenticationService} from '../../Services/authentication.service';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  _news: News[];
  constructor(private _authService: AuthenticationService,
              private _newsService: NewsService,
              private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
      this._newsService.getNews().subscribe(list => {
        console.log(list);
        this._news = list;
      }, error => {
        return error;
        }
        );
  }

  getIsAdmin(): boolean {
    return this._authService.getIsAdmin();
  }
}
