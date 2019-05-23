import { Component, OnInit } from '@angular/core';
import {HttpArticlesService} from '../services/http.articles.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  providers:[HttpArticlesService]
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
