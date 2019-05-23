import {NgModule} from "@angular/core";
import {ArticlesComponent} from "./articles/articles.component";
import {CommonModule} from "@angular/common";
import {MainMenuComponent} from "./main-menu/main-menu.component";
import { RazdelsComponent } from './articles/razdels/razdels.component';

@NgModule({
  declarations:[
    ArticlesComponent,
    MainMenuComponent,
    RazdelsComponent
  ],
  imports:[
  CommonModule
]
})
export class BlogModule {

}
