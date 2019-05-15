import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from "./not-found-component/not-found.component";


const routes: Routes = [
  /*{ path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},*/
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
