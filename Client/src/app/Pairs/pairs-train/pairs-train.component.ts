import { Component, OnInit } from '@angular/core';
import {IOService} from "../Services/i-o.service";
import {PairList} from "../models/pair-list.model";

@Component({
  selector: 'app-train',
  templateUrl: './pairs-train.component.html',
  styleUrls: ['./pairs-train.component.css']
})
export class PairsTrainComponent implements OnInit {
  showList :PairList;
  constructor(private io : IOService) { }

  ngOnInit() {
  }
  startClick() {

    this.io.getTask({test:"testObj"}, (data)=>
    {
      this.showList = new PairList(data.t.pairs);
      console.log("callback " + data);
    });
  }
}
