import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  constructor(private template: TemplateRef<any>, private vc: ViewContainerRef) { }

  @Input("unless") set value(condition: boolean) {
    if (condition) {
      //ngIf - filterText.length>0
      //unless filterText.length == 0  
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.template);
    }
  }

}
