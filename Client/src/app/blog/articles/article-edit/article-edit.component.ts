import {Component, ElementRef, OnInit} from '@angular/core';
import {Article} from "../article.model";


@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.css']
})
export class ArticleEditComponent implements OnInit {

  article : Article
  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.loadScript();
  }
  public  loadScript() {
    let isFound = false;
    let scripts = document.getElementsByTagName("script")
    for (let i = 0; i < scripts.length; ++i) {
      if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("ckeditor")) {
        isFound = true;
      }
    }
    if (!isFound) {
      var dynamicScript = "https://cdn.ckeditor.com/4.11.4/standard/ckeditor.js";
      let node = document.createElement('script');
      node.src = dynamicScript;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      console.log(node);
      document.getElementsByTagName('head')[0].appendChild(node);
    }
    /*ngAfterViewInit() {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "scripts/ckeditor/ckeditor.js";
      console.log(s);
      this.elementRef.nativeElement.appendChild(s);
    }*/
  }
}
