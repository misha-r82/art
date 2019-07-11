import { Injectable } from '@angular/core';
import { WebsocketService } from '../Services/webSoketService';
import { Observable, Subject } from 'rxjs';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthService {

  io: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService, private http: HttpClient) {
    this.wsService.init("http://localhost:3000/");
    this.io = <Subject<any>>wsService.connect();
    //this.io.subscribe((data)=>console.log(data));

      /*.map((response: any): any => {
        return response;
      })*/
  }
  logOut()
  {
    this.io.subscribe((data)=>{
      this.io.unsubscribe();
      console.log(data)
    });
    this.io.next({"action" : "logout"});
  }
  authVk()
  {

    return this.http.get(`http://localhost:3000/auth/vk`);


  }
  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.io.next(msg);
  }

}
