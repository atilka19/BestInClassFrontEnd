import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
  newsForm = new FormGroup( {
    header: new FormControl(''),
    shortDesc: new FormControl(''),
    picture: new FormControl(''),
    body: new FormControl(''),
    tags: new FormControl('')
  });

  constructor(private _newsService: NewsService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    const news = this.newsForm.value;
    this._newsService.updateNews(news).subscribe(() =>
    this.router.navigateByUrl('/news'));
  }
}
