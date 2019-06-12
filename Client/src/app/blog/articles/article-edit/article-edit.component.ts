import {Component, ElementRef, OnInit} from '@angular/core';
import {Article} from "../article.model";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {HttpRazdelsService} from "../../services/http.razdels.service";
import {Razdel} from "../razdel.model";


@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[HttpRazdelsService, HttpArticlesService]
})
export class ArticleEditComponent implements OnInit {

  article : Article;
  razdels : Razdel[];
  constructor(private route: ActivatedRoute, private httpArtService: HttpArticlesService, private razdelService : HttpRazdelsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params["id"];
      this.httpArtService.getArtСontent(id).subscribe(
        (data: Article) => {
          this.article = data;
          this.razdelService.getData().subscribe((data : Razdel[]) =>this.razdels = data);
        });
    });
  }

}
