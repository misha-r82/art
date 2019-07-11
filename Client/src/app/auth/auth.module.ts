import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import { UserComponent } from './user/user.component';
import {WebsocketService} from "../Services/webSoketService";

@NgModule({
  declarations:[
    AuthComponent,
    UserComponent
  ],
  imports:[
    CommonModule
  ],
  exports:[AuthComponent, UserComponent],
  providers:[WebsocketService]



})
export class AuthModule {}
