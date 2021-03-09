import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[better-highlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input("better-highlight") defaultColor: string;
  @Input() highlight: string;
  @HostBinding("style.backgroundColor") bg:string;
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = this.defaultColor;
  }

  @HostListener("click") OnClick() {
    alert("Clicked");
  }

  @HostListener("mouseenter") OnMouseEnter() {
    // this.el.nativeElement.style.backgroundColor = this.highlight;
    this.bg = this.highlight;
  }

  @HostListener("mouseleave") OnMouseLeave() {
    // this.el.nativeElement.style.backgroundColor = this.defaultColor;
    this.bg = this.defaultColor;
  }


}
