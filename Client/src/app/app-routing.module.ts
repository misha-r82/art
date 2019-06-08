import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {ArticlesComponent} from "./blog/articles/articles.component";
import {ArticleListComponent} from "./blog/articles/article-list/article-list.component";
import {ArticleViewComponent} from "./blog/articles/article-view/article-view.component";
import {ArticleEditComponent} from "./blog/articles/article-edit/article-edit.component";

const artRoutes: Routes = [
  { path: 'razdel/:id', component: ArticleListComponent},
  { path: 'article/:id', component: ArticleViewComponent},
  { path: 'article/edit/:id', component: ArticleEditComponent},
];
const routes: Routes = [
  /*{ path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},*/
  { path: 'login', component: AuthComponent },
  {path:'articles', component:ArticlesComponent, children : artRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
