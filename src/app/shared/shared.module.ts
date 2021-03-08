import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    ShortenPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShortenPipe,
    FilterPipe
  ]
})
export class SharedModule { }
