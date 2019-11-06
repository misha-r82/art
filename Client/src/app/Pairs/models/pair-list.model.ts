import {StrPair} from "./str-pair.model";

export class PairList {
  items: StrPair[];
  constructor (sourse : Array<any>)
  {
    for (let i = 0; i < this.items.length; i++) {
      this.items.push(sourse[i]);
    }
  }
  async showEach(period, part) {
    let period2 = part * period;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.showAll();
      await delay(() => {
        item.hideAll();
      }, 1000);
    }


    function delay(onDelayEnd, tiks: number) {
      return new Promise(resolve => {
        setTimeout(() => {
          onDelayEnd();
          resolve();
        }, tiks);
      })

      function HideAll() {
        this.items.forEach(i => i.hideAll());
      }

      function ShowAll() {
        this.items.forEach(i => i.ShowAll());
      }

    }
  }
}
