import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {WebsocketService} from "../Services/webSoketService";
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [WebsocketService, AuthService]
})
export class AuthComponent implements OnInit {

  constructor(private wsAuthService: AuthService, @Inject(DOCUMENT) private document: any) {

  }

  ngOnInit() {  }

  testClick() {
    this.wsAuthService.sendMsg("123");
  }
  vkClick()
  {
    this.document.location = "http://localhost:3000/auth/vk";

  }
}
