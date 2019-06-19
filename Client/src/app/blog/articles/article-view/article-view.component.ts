import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../article.model";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private httpArtService: HttpArticlesService) {  }

  id: number;
 @Input() article: Article;
 commentText : string;
  AddCommentClick()
  {
    let data = {"articleId":this.id, "commentText" : this.commentText};
    this.httpArtService.addComment(data).subscribe((data)=>console.log(data));
  }

  ngOnInit() {
    this.id = +this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      var data = this.httpArtService.getArtList(this.id);
      this.httpArtService.getArtСontent(this.id).subscribe(
        (data: Article) => {
          this.article = data;
        });
    });
  }
}

