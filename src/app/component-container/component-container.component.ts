import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from '../shared/services/logger.service';

@Component({
  selector: 'parent-comp',
  templateUrl: './component-container.component.html',
  styles: [
  ]
})
export class ComponentContainerComponent implements OnInit {

  constructor(private inj: Injector) { }
  public dynamicTabs: any[];

  ngOnInit(): void {
    this.dynamicTabs = [
      {
        label: "Tab 1",
        component: Tab1Component,
        injector: Injector.create({ providers: [{ provide: LoggerService }], parent: this.inj })
      },
      {
        label: "Tab 2",
        component: Tab2Component,
        injector: Injector.create({ providers: [{ provide: LoggerService }], parent: this.inj })
      },
      {
        label: "Tab 3",
        component: Tab3Component,
        injector: Injector.create({ providers: [{ provide: LoggerService }], parent: this.inj })
      },
    ];
  }

}


@Component({
  selector: 'tab1-comp',
  template: `<div>Tab 1</div>`
})
export class Tab1Component implements OnInit {
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log("Tab 1 Injected");
  }
}

@Component({
  selector: 'tab2-comp',
  template: `<div>Tab 2</div>`
})
export class Tab2Component implements OnInit {
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log("Tab 2 Injected");
  }
}

@Component({
  selector: 'tab3-comp',
  template: `<div>Tab 3</div>`
})
export class Tab3Component implements OnInit {
  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log("Tab 3 Injected");
  }
}