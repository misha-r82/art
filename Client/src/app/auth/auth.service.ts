import { Injectable } from '@angular/core';
import { WebsocketService } from '../Services/webSoketService';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  io: Subject<any>;
  userName:string;
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
    this.http.get(`http://localhost:3000/login/logout/`).subscribe(
      (data)=>
      {
        console.log(data);
        if (data["status"] != "ok") return;
        this.userName = "";
      }
    )
  }
  authVk()
  {

    return this.http.get(`http://localhost:3000/auth/vk`);


  }

  sendMsg(msg) {
    this.io.next(msg);
  }

}
