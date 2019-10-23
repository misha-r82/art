import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PairsMainComponent} from "./pairs-main/pairs-main.component";
import {PairListComponent} from "./pair-list/pair-list.component";
import {StrPairComponent} from "./str-pair/str-pair.component";
import { PairsTrainComponentComponent } from './Trains/pairs-train-component/pairs-train-component.component';

@NgModule({
  declarations: [PairsMainComponent, PairListComponent, StrPairComponent, PairsTrainComponentComponent],
    imports: [CommonModule],
  exports:[PairsMainComponent]
})
export class PairsModule { }
