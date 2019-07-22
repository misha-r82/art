import {Component, ElementRef, OnInit} from '@angular/core';
import {Article} from "../../articles/article.model";
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {HttpRazdelsService} from "../../services/http.razdels.service";
import {Razdel} from "../../articles/razdel.model";


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

        });
      this.razdelService.getData().subscribe((data : Razdel[]) =>this.razdels = data);
    });
  }

  onOkClick() {
    console.log(this.article);
       // this.httpArtService.addArticle(this.article).subscribe((data)=> console.log(data));

  }
}
