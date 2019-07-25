import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Article} from "../../articles/article.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {HttpRazdelsService} from "../../services/http.razdels.service";
import {Razdel} from "../../articles/razdel.model";
import {CkEditorComponent} from "../../articles/ckeditor.component";


@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers:[HttpRazdelsService, HttpArticlesService]
})
export class ArticleEditComponent implements OnInit, OnDestroy {

  article : Article;
  razdels : Razdel[];
  @ViewChild('editor') editor:ElementRef;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private httpArtService: HttpArticlesService,
              private razdelService : HttpRazdelsService)
  {
    this.article =new Article();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let id = +params["id"];
      if (id >0)
      {
        this.httpArtService.getArtСontent(id).subscribe(
          (data: Article) => {
            this.article = data;
          });
      }
      this.razdelService.getData().subscribe((data : Razdel[]) =>this.razdels = data);
    });
  }

  onOkClick() {
    console.log(this.article);
       // this.httpArtService.addArticle(this.article).subscribe((data)=> console.log(data));

  }
  onCanselClick(e:CkEditorComponent)
  {
    e.ngOnDestroy();
    this.router.navigate(["/admin/articles"]);

  }
  ngOnDestroy()
  {

  }
}
