import { Component, OnInit } from '@angular/core';
import {AuthService} from "./auth.service";
import {WebsocketService} from "../Services/webSoketService";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [WebsocketService, AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private wsAuthService : AuthService) { }

  ngOnInit() {  }

  testClick() {
    this.wsAuthService.sendMsg("123");
  }
  vkClick()
  {
    console.log("Click");
    this.wsAuthService.authVk();

  }
}
