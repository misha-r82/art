import {NgModule} from "@angular/core";
import {ArticlesComponent} from "./articles/articles.component";
import {CommonModule} from "@angular/common";
import {MainMenuComponent} from "./main-menu/main-menu.component";

@NgModule({
  declarations:[
    ArticlesComponent,
    MainMenuComponent
  ],
  imports:[
  CommonModule
]
})
export class BlogModule {

}
