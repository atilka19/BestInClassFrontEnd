import { Component, OnInit } from '@angular/core';
import {News} from '../../Shared/models/News';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  _news: News[];
  constructor() { }

  ngOnInit() {
  }

}
