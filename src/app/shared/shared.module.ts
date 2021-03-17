import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { MustMatchDirective } from './directives/must-match.directive';
import { EmailMatchDirective } from './directives/email-match.directive';

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
  exports:[
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
