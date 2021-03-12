import { NgModule } from '@angular/core';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  exports:[
    RatingModule,
    ToastModule,
    RippleModule
  ]
})
export class PrimengModule { }
