import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twb',
  templateUrl: './twoway-binding.component.html',
  styles: [
  ]
})
export class TwowayBindingComponent {

  constructor() { }

  OneWayMessage: string = "";
  OneWayChange(data) {
    this.OneWayMessage = data.target.value;
  }
  OneWayTest() {
    this.OneWayMessage = "One way test going on";
  }


  TwoWayMessage: string = "";
  TwoWayChange(data:string) {
    this.TwoWayMessage = data.toUpperCase();
  }
  TwoWayTest() {
    this.TwoWayMessage = "Two way test going on";
  }

}
