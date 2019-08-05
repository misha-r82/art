import { Injectable } from '@angular/core';
import { WebsocketService } from '../Services/webSoketService';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {until} from "selenium-webdriver";
import elementIsSelected = until.elementIsSelected;
import {User} from "./user.model";

@Injectable()
export class AuthService {

  io: Subject<any>;
  isSigned:boolean = false;
  user: any = new User();
  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService, private http: HttpClient) {
    //this.wsService.init("http://localhost:3000/");
    //this.io = <Subject<any>>wsService.connect();
  }
  logOut()
  {
    /*this.io.subscribe((data)=>{
      this.io.unsubscribe();
      console.log(data)
    });
    this.io.next({"action" : "logout"});*/
    this.http.get(`http://localhost:3000/login/logout/`,{ withCredentials: true }).subscribe(
      (data)=>
      {
        console.log(data);
        if (data["status"] == "ok")
          this.getUser();

      }
    )
  }
  getUser()
  {
    this.http.get(`http://localhost:3000/login/getUser/`, { withCredentials: true }).subscribe(
      (user : User)=> {
        console.log(user);
        if (user && user.hasOwnProperty("userName")) {
          this.user = user;
          this.isSigned = true;

        } else {
          this.user = new User();
          this.isSigned = false;
        }
        console.log(this.isSigned);
      });

  }
  authVk()
  {
    return this.http.get(`http://localhost:3000/auth/vk`);
  }
  auth(login : string, password:string)
  {

    let data = {"login" : login, "password" : password}
    console.log(data);
    return this.http.post(`http://localhost:3000/login`, data);
  }
  sendMsg(msg) {
    this.io.next(msg);
  }

}
