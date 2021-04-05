import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective, MustMatchDirective, EmailMatchDirective } from "./shared.index";
import { MaterialModule } from '../ui-libs/material/material.module';
import { PrimengModule } from '../ui-libs/primeng/primeng.module';

@NgModule({
  declarations: [
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    MustMatchDirective,
    EmailMatchDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShortenPipe,
    FilterPipe,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    MustMatchDirective,
    EmailMatchDirective
  ]
})
export class SharedModule { }
