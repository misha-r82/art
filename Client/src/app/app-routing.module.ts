import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {ArticlesComponent} from "./blog/articles/articles.component";


const routes: Routes = [
  /*{ path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},*/
  { path: 'login', component: AuthComponent },
  {path:'', component:ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
