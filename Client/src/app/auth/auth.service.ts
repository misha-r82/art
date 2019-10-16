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
  private user: User;
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
    this.io.next({"action" : "logout"});
    sendMsg(msg) {
      this.io.next(msg);
    }*/
    this.http.get(`http://localhost:3000/login/logout/`,{ withCredentials: true }).subscribe(
      (data)=>
      {
        if (data["status"] == "ok")
          this.getUser();
      }
    )
  }
  getUser() : Promise<User>
  {
    let self = this;
    return new Promise(function(resolve, reject) {
    if (self.user != undefined) resolve(this.user);
    console.log("GetUser!")
    self.http.get(`http://localhost:3000/login/getUser/`, { withCredentials: true }).subscribe(
      (user : User)=> {
        if (user && user.hasOwnProperty("userName")) {
          self.user = user;
          self.isSigned = true;
        } else {
          self.user = new User();
          self.isSigned = false;
        }
        resolve(self.user);
      });
    });
  }
  authVk()
  {
    return this.http.get(`http://localhost:3000/auth/vk`);
  }
  auth(login : string, password:string)
  {
    let data = {"login" : login, "password" : password}
    return this.http.post(`http://localhost:3000/login`, data, { withCredentials: true });
  }

}
