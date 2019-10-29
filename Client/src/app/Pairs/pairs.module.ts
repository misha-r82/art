import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PairsMainComponent} from "./pairs-main/pairs-main.component";
import {PairListComponent} from "./pair-list/pair-list.component";
import {StrPairComponent} from "./str-pair/str-pair.component";
import { PairsTrainComponent } from './Trains/pairs-train-component/pairs-train.component';

@NgModule({
  declarations: [PairsMainComponent, PairListComponent, StrPairComponent, PairsTrainComponent],
    imports: [CommonModule],
  exports:[PairsMainComponent]
})
export class PairsModule { }
