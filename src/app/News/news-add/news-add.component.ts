import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  newsForm = new FormGroup( {
    header: new FormControl(''),
    shortDesc: new FormControl(''),
    picture: new FormControl(''),
    body: new FormControl(''),
    tags: new FormControl('')
  });

  constructor(private _newsService: NewsService, private router: Router,) { }

  ngOnInit() {
  }

  submit() {
    const newstb = this.newsForm.value;
    this._newsService.addNews(newstb).subscribe(() =>
      this.router.navigateByUrl('/'));
    window.location.reload();
  }

}
