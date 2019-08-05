import {Component, Inject, OnInit} from '@angular/core';
import {AuthService} from "./auth.service";
import {WebsocketService} from "../Services/webSoketService";
import { DOCUMENT } from '@angular/common';
import {Router} from "@angular/router"

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [WebsocketService, AuthService]
})
export class AuthComponent implements OnInit {

  login : string;
  password:string;
  isFail:boolean = false;
  constructor(private router: Router, private wsAuthService: AuthService, @Inject(DOCUMENT) private document: any) {

  }

  ngOnInit() {  }

  testClick() {
    this.wsAuthService.sendMsg("123");
  }
  vkClick()
  {
    this.document.location = "http://localhost:3000/auth/vk";

  }

  onLoginClick()
  {
    this.wsAuthService.auth(this.login, this.password).subscribe((result)=>
    {
      if (result["status"] == "ok")
      {
        this.router.navigate(['/']);
      } else
      {
        this.isFail = true;
      }

    })
  }
}
