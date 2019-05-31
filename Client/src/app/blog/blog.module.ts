import {NgModule} from "@angular/core";
import {ArticlesComponent} from "./articles/articles.component";
import {CommonModule} from "@angular/common";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import { RazdelsComponent } from './articles/razdels/razdels.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleViewComponent } from './articles/article-view/article-view.component';
import {RouterModule} from "@angular/router";
import { CommentComponent } from './articles/comment/comment.component';

@NgModule({
  declarations:[
    ArticlesComponent,
    MainMenuComponent,
    RazdelsComponent,
    ArticleListComponent,
    ArticleViewComponent,
    CommentComponent
  ],
  imports:[
  CommonModule, RouterModule
]
})
export class BlogModule {

}
