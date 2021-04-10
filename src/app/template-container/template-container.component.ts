import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-container',
  templateUrl: './template-container.component.html',
  styles: [
  ]
})
export class TemplateContainerComponent implements OnInit, AfterViewInit {

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.testTemplate);
  }
  nums: number[] = [1, 2, 3, 6, 5, 8, 75];
  ctx = { parentData: 50 };

  @ViewChild("test") testTemplate: TemplateRef<any>;
  ngOnInit(): void {

  }

}


@Component({
  selector: 'container-ex',
  template: `
  <div></div>
  <ng-container *ngTemplateOutlet="testTemplate;context:ctx"></ng-container>
  `
})

export class TestContainerComponent implements OnInit {
  @Input() testTemplate:TemplateRef<any>;
  constructor() { }
  ctx = { parentData: 101 };
  ngOnInit() { }
}