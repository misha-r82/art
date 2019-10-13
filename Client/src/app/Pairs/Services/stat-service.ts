import { Injectable } from '@angular/core';
import { WebsocketService } from '../../Services/webSoketService';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class AuthService {

  io: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
  this.wsService.init("http://localhost:3000/");
  this.io = <Subject<any>>wsService.connect();
}



sendMsg(msg) {
  this.io.next(msg);
}
}
