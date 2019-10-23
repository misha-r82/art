import {Component, Input, OnInit} from '@angular/core';
import {StrPairComponent} from "../str-pair/str-pair.component";
import {StrPair} from "../models/str-pair.model";
import {PairList} from "../models/pair-list.model";


@Component({
  selector: 'pair-list',
  templateUrl: './pair-list.component.html',
  styleUrls: ['./pair-list.component.css']
})
export class PairListComponent implements OnInit {
  pList: PairList;
  constructor() {
    /*this.items = [];
    for(let i = 0; i<10; i++)
    {
      let item = new StrPair(`key${i}`, `val${i}`);
      item.hideAll();
      this.items.push(item);
    }*/
  }

  ngOnInit() {  }
  testBool : boolean = false;





}
