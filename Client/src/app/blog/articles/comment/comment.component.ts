import {Component, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../comment.model';
import {Article} from "../article.model";
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }
  @Input() comment : Comment;

  ngOnInit() {
  }

}
