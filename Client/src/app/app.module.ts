import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BlogModule} from "./blog/blog.module";
import {AuthModule} from "./auth/auth.module";
import {AuthService} from "./auth/auth.service";
import { PairsMainComponent } from '../../Pairs/pairs-main/pairs-main.component';



@NgModule({
  declarations: [
    AppComponent,
    PairsMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BlogModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
