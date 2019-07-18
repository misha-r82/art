import { Component, OnInit } from '@angular/core';
import {Article} from "../../articles/article.model";
import {HttpArticlesService} from "../../services/http.articles.service";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private httpArtService : HttpArticlesService) { }
  articles : Article[];
  ngOnInit() {
    var data = this.httpArtService.getArtList();
    this.httpArtService.getArtList(this.id).subscribe(
      (data: Article[]) => {
        this.articles = data;

      });
  }

}
