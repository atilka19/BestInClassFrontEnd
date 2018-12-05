import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewsService} from '../../Services/news.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-news-update',
  templateUrl: './news-update.component.html',
  styleUrls: ['./news-update.component.css']
})
export class NewsUpdateComponent implements OnInit {
  id: number;
  newsForm = new FormGroup( {
    header: new FormControl(''),
    shortDesc: new FormControl(''),
    picture: new FormControl(''),
    body: new FormControl(''),
    tags: new FormControl('')
  });

  constructor(private _newsService: NewsService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this._newsService.getNewsByID(this.id)
      .subscribe(customerFromRest => {
        this.newsForm.patchValue({
          header: customerFromRest.header,
          shortDesc: customerFromRest.shortDesc,
          picture: customerFromRest.picture,
          body: customerFromRest.body,
          tags: customerFromRest.tags
        });
      });
  }

  submit() {
    const news = this.newsForm.value;
    this._newsService.updateNews(news).subscribe(() =>
    this.router.navigateByUrl('/news'));
  }
}
