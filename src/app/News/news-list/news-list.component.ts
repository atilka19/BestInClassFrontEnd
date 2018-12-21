import { Component, OnInit } from '@angular/core';
import {News} from '../../Shared/models/News';
import {AuthenticationService} from '../../Services/authentication.service';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  _news: News[];
  loading: boolean;
  count: number;
  PE: PageEvent;
  constructor(private _authService: AuthenticationService,
              private _newsService: NewsService,
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
      this._newsService.getNews(this.PE.pageIndex + 1, this.PE.pageSize)
        .subscribe(pagedList => {
        this.count = pagedList.count;
        this._news = pagedList.list;
      }, error => {
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
