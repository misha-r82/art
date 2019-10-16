import { Component, OnInit } from '@angular/core';
import {IOService} from "../Services/i-o.service"
@Component({
  selector: 'app-pairs-main',
  templateUrl: './pairs-main.component.html',
  styleUrls: ['./pairs-main.component.css'],
  providers: [IOService]
})
export class PairsMainComponent implements OnInit {

  constructor(private io: IOService) { }

  ngOnInit() {
  }

  startClick() {

    this.io.getTask({test:"testObj"}, (data)=>
    {
       console.log("callback " + data);
    });
  }
}
