import {Input} from "@angular/core";

export class StrPair {
  constructor(public key : string, public val : string){}
  keyVisible:boolean = true;
  valVisible:boolean = true;
  showAll()
  {
    this.keyVisible = true;
    this.valVisible = true;
  }
  hideAll()
  {
    this.keyVisible = false;
    this.valVisible = false;
  }
}
