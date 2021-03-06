import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {CommonModule} from "@angular/common";
import { UserComponent } from './user/user.component';
import {WebsocketService} from "../Services/webSoketService";
import {CacheInterceptor} from "./cacheInterceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations:[
    AuthComponent,
    UserComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ],
  exports:[AuthComponent, UserComponent],
  providers:[WebsocketService, { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true }]



})
export class AuthModule {}
