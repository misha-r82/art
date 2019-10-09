import {Component, Input, OnInit} from '@angular/core';
import {StrPair} from "../models/str-pair.model";

@Component({
  selector: 'str-pair',
  templateUrl: './str-pair.component.html',
  styleUrls: ['./str-pair.component.css']
})

export class StrPairComponent implements OnInit {
  @Input() pair : StrPair;
  constructor(){ this.pair = new StrPair("key", "val")}
  ngOnInit() { }
  testClick()
 {

 }

}
