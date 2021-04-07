import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailMatchDirective } from "./shared.index";

@NgModule({
  declarations: [
    EmailMatchDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmailMatchDirective
  ]
})
export class SharedModule { }
