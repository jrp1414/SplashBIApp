import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe, BasicHighlightDirective, BetterHighlightDirective, UnlessDirective, MustMatchDirective, EmailMatchDirective } from "./shared.index";

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
    CommonModule
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
