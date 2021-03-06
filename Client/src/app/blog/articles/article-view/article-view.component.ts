import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HttpArticlesService} from "../../services/http.articles.service";
import {Article} from "../article.model";
import {Comment} from "../comment.model";
import {AuthService} from "../../../auth/auth.service";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
  styleUrls: ['./article-view.component.css']
})
export class ArticleViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private httpArtService: HttpArticlesService,
              private authServoce: AuthService) {
  }

  @Input() article: Article;
  commentText: string;

  addCommentClick() {
    let data = {articleId: this.article.id, commentText: this.commentText};
    this.httpArtService.addComment(data).subscribe((comment: Comment) => {
      this.article.comments.unshift(comment);
    });
  }

  onEndEdit(comment: Comment)
  {
    this.httpArtService.updateComment(comment).subscribe((result) =>{

    })
  }
  onDelete(comment : Comment) {
    this.httpArtService.delComment(comment.commentId).subscribe((result: any) => {
      if (result == undefined) return;
      if (!result["sucess"]) return;
      var index = this.article.comments.indexOf(comment);
      if (index > -1)
        this.article.comments.splice(index, 1);
   })
  }
  ngOnInit() {
    let id = +this.route.params.subscribe((params: Params) => {
      id = +params["id"];

      this.httpArtService.getArtСontent(id).subscribe(
        (data: Article) => {
          console.log(data);
          this.article = data;
        });
    });
  }
}

