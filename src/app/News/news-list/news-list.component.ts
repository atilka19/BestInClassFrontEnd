import { Component, OnInit } from '@angular/core';
import {News} from '../../Shared/models/News';
import {AuthenticationService} from '../../Services/authentication.service';
import {NewsService} from '../../Services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  _news: News[];
  constructor(private _authService: AuthenticationService, private _newsService: NewsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
      this._newsService.getNews().subscribe(list => {
        this._news = list;
      }, error => {
        return error;
        }
        );
  }

  deleteNews(id: number) {
    this._newsService.deleteNews(id).subscribe(msg => {
      this.refresh();
    });
  }

  getToken(): string {
    return this._authService.getToken();
  }
}
