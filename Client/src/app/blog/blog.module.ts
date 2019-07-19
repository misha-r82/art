import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {ArticlesComponent} from "./articles/articles.component";
import {CommonModule} from "@angular/common";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import { RazdelsComponent } from './articles/razdels/razdels.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleViewComponent } from './articles/article-view/article-view.component';
import {RouterModule} from "@angular/router";
import { CommentComponent } from './articles/comment/comment.component';
import { ArticleEditComponent } from './admin/article-edit/article-edit.component';
import {CkEditorComponent} from "./articles/ckeditor.component";
import { AdminMenuComponent } from './admin/admin-menu/admin-menu.component';
import {AuthModule} from "../auth/auth.module";
import { AdminArticlesComponent } from './admin/admin-articles/admin-articles.component';


@NgModule({
  declarations:[
    ArticlesComponent,
    MainMenuComponent,
    RazdelsComponent,
    ArticleListComponent,
    ArticleViewComponent,
    CommentComponent,
    ArticleEditComponent,
    CkEditorComponent,
    AdminMenuComponent,
    AdminArticlesComponent,

  ],
  imports:[
  CommonModule, RouterModule, FormsModule, AuthModule
]
})
export class BlogModule {

}

