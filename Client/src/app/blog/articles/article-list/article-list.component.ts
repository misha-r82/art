import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../article.model";
import {Razdel} from "../razdel.model";

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private route : ActivatedRoute, private httpArtService : HttpArticlesService ) { }
  id : number;
  articles : Article[];
  ngOnInit() {

    this.id = +this.route.params.subscribe((params : Params)=>{
      this.id = +params["id"];
      var data = this.httpArtService.getArtList(this.id);
      this.httpArtService.getArtList(this.id).subscribe(
        (data: Article[]) => {
          this.articles = data;

        });
    });

  }

}
