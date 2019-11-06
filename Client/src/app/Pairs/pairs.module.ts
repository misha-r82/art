import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PairsMainComponent} from "./pairs-main/pairs-main.component";
import {PairListComponent} from "./pair-list/pair-list.component";
import {StrPairComponent} from "./str-pair/str-pair.component";
import { PairsTrainComponent } from './pairs-train/pairs-train.component';

@NgModule({
  declarations: [PairsMainComponent, PairsTrainComponent, PairListComponent ,StrPairComponent, PairsTrainComponent ],
    imports: [CommonModule],
  exports:[PairsMainComponent]
})
export class PairsModule { }
