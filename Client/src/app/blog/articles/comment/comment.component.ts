import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../comment.model';
import {ADminGuard} from "../../../admin.guard";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private adminGuard : ADminGuard) { }
  @Output() onDelete = new EventEmitter<Comment>();
  @Output() onEndEdit = new EventEmitter<Comment>();
  @Input() comment : Comment;
  isEditing : boolean;
  ngOnInit() {
  }

  DeleteCommentClick() {
    this.onDelete.emit(this.comment);
  }
  EditCommentClick()
  {
    this.isEditing = true;
  }
  editCanselClick()
  {
    this.isEditing = false;

  }
  editOkClick()
  {
    this.isEditing = false;
    this.onEndEdit.emit(this.comment);
  }
}
