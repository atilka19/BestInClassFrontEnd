import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NewsService} from '../../Services/news.service';
import {Router} from '@angular/router';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {

  constructor(private _newsService: NewsService, private router: Router, private ngZone: NgZone ) { }

  newsForm = new FormGroup( {
    header: new FormControl(''),
    shortDesc: new FormControl(''),
    picture: new FormControl(''),
    body: new FormControl(''),
    tags: new FormControl('')
  });

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  ngOnInit() {
  }

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }

  submit() {
    const newstb = this.newsForm.value;
    this._newsService.addNews(newstb).subscribe(msg => {
      window.alert('News Segment has been added!');
      window.location.reload();
      }, error => {
        return error;
      }
    );
  }

}
