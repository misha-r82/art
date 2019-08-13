import { Component, OnInit } from '@angular/core';
import {StrPairComponent} from "../str-pair/str-pair.component";
import {StrPair} from "../models/str-pair.model";


@Component({
  selector: 'pair-list',
  templateUrl: './pair-list.component.html',
  styleUrls: ['./pair-list.component.css']
})
export class PairListComponent implements OnInit {
  items: StrPair[];
  constructor() {
    this.items = [];
    for(let i = 0; i<10; i++)
    {
      let item = new StrPair(`key${i}`, `val${i}`);
      item.hideAll();
      this.items.push(item);
    }
  }

  ngOnInit() {  }
  testBool : boolean = false;
  async onStart()
  {
    for (let i = 0; i<this.items.length; i++)
    {
      let item = this.items[i];
      item.showAll();
      await delay(()=>{item.hideAll();}, 1000);
    }


    function delay(onDelayEnd, tiks: number) {
      return new Promise(resolve => {
        setTimeout(() => {
          onDelayEnd();
          resolve();
        },tiks);
      })
    function HideAll() { this.items.forEach(i=>i.hideAll()); }
    function ShowAll() { this.items.forEach(i=>i.ShowAll()); }

    }

  }


}
