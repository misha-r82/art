import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  id : number;
  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
  }

}
