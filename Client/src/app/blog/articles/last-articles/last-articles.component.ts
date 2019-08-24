import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../article.model";

@Component({
  selector: 'app-new-articles',
  templateUrl: './last-articles.component.html',
  styleUrls: ['./last-articles.component.css']
})
export class LastArticlesComponent implements OnInit {

  constructor(private route : ActivatedRoute, private httpArtService : HttpArticlesService ) { }
  articles : Article[];
  ngOnInit() {
      this.httpArtService.getArtList(-1).subscribe(
        (data: Article[]) => {
          this.articles = data;

        });


  }

}
