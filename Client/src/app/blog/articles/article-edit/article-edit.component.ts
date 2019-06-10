import {Component, ElementRef, OnInit} from '@angular/core';
import {Article} from "../article.model";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";


@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article : Article
  constructor(private route: ActivatedRoute, private httpArtService: HttpArticlesService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params["id"];
      this.httpArtService.getArtСontent(id).subscribe(
        (data: Article) => {
          console.log(data);
          this.article = data;
        });
    });
  }

}
