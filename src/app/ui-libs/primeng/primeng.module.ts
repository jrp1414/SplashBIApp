import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import {ChipsModule} from 'primeng/chips';

@NgModule({
  exports:[
    RatingModule,
    ToastModule,
    RippleModule,
    ChipsModule
  ]
})
export class PrimengModule { }
