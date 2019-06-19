import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../article.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private httpArtService: HttpArticlesService) { }

 @Input() article: Article;
  commentText : string;
  AddCommentClick()
  {
    let data = {articleId:this.article.id, commentText : this.commentText};
    console.log(JSON.stringify(data));
    this.httpArtService.addComment(data).subscribe((data)=>{
    });//console.log(data));
  }

  ngOnInit() {
    let id = +this.route.params.subscribe((params: Params) => {
      id = +params["id"];
      var data = this.httpArtService.getArtList(id);
      this.httpArtService.getArtСontent(id).subscribe(
        (data: Article) => {
          this.article = data;
        });
    });
  }
}

