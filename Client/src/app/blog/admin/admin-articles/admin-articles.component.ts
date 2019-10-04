import { Component, OnInit } from '@angular/core';
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../../articles/article.model";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css'],
  providers: [HttpArticlesService]
})
export class AdminArticlesComponent implements OnInit {

  constructor( private httpArtService : HttpArticlesService) { }
  articles : Article[];
  ngOnInit() {
    console.log("Admin/Articles!!!");
    this.httpArtService.getArtList(-1).subscribe(
      (data: Article[]) => {
        this.articles = data;
      });
  }

}
