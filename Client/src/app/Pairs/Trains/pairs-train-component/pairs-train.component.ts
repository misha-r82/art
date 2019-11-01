import { Component, OnInit } from '@angular/core';
import {IOService} from "../../Services/i-o.service";

@Component({
  selector: 'app-pairs-train-component',
  templateUrl: './pairs-train.component.html',
  styleUrls: ['./pairs-train.component.css'],
  providers: [IOService]
})
export class PairsTrainComponent implements OnInit {

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
