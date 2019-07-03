import { Injectable } from '@angular/core';
import { WebsocketService } from '../Services/webSoketService';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class WsAuthService {

  messages: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
    this.wsService.init("http://localhost:3000/");
    this.messages = <Subject<any>>wsService
      .connect()
      /*.map((response: any): any => {
        return response;
      })*/
  }

  // Our simplified interface for sending
  // messages back to our socket.io server
  sendMsg(msg) {
    this.messages.next(msg);
  }

}
