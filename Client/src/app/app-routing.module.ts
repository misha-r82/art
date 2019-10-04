import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {ArticlesComponent} from "./blog/articles/articles.component";
import {ArticleListComponent} from "./blog/articles/article-list/article-list.component";
import {ArticleViewComponent} from "./blog/articles/article-view/article-view.component";
import {ArticleEditComponent} from "./blog/admin/article-edit/article-edit.component";
import {AdminArticlesComponent} from "./blog/admin/admin-articles/admin-articles.component";
import {ADminGuard} from "./admin.guard";

const artRoutes: Routes = [
  { path: 'razdel/:id', component: ArticleListComponent},
  { path: 'article/:id', component: ArticleViewComponent},
];
const adminArtRoutes: Routes = [

  { path: 'edit/:id', component: ArticleEditComponent},

];

const routes: Routes = [

  { path: 'login', component: AuthComponent },
  {path:'articles', component:ArticlesComponent, children : artRoutes},
  {path:'admin/articles', component:AdminArticlesComponent, canActivate:[ADminGuard]},
  {path:'admin/articles/edit/:id', component:ArticleEditComponent, canActivate:[ADminGuard]},
  {path:'admin/articles/add', component:ArticleEditComponent, canActivate:[ADminGuard]},
  { path: '**', redirectTo:"/articles" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true } )],
  exports: [RouterModule],
  providers:[ADminGuard]
})
export class AppRoutingModule { }
