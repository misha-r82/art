import { Component, OnInit } from '@angular/core';
import {WsAuthService} from "./ws.auth.service";
import {WebsocketService} from "../Services/webSoketService";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [WebsocketService, WsAuthService]
})
export class AuthComponent implements OnInit {

  constructor(private wsAuthService : WsAuthService) { }

  ngOnInit() {  }

  testClick() {
    this.wsAuthService.sendMsg("123");
  }
}
