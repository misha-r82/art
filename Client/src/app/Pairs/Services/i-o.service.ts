import { Injectable } from '@angular/core';
import { WebsocketService } from '../../Services/webSoketService';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class IOService {

  io: Subject<any>;

  // Our constructor calls our wsService connect method
  constructor(private wsService: WebsocketService) {
  this.wsService.init("http://localhost:3000/");
  this.io = <Subject<any>>wsService.connect();
}

sendResult(data)
{
  this.io.next(data);
}
public getTask(tskQer, cb)
{

  this.io.next({type : "getTask", tsk:tskQer});
  this.io.subscribe((data)=>
  {
    cb(data);
    this.io.unsubscribe();
  })
}

sendMsg(msg) {
  this.io.next(msg);
}
}
