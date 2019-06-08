import {Component, ElementRef, OnInit} from '@angular/core';
import {Article} from "../article.model";
import {CkEditorModule} from "../ckeditor.module";

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article : Article
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
  }

  /*ngAfterViewInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "scripts/ckeditor/ckeditor.js";
    console.log(s);
    this.elementRef.nativeElement.appendChild(s);
  }*/
}
