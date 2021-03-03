import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eb',
  templateUrl: './event-binding.component.html',
  styles: [
  ]
})
export class EventBindingComponent {

  constructor() { }

  message: string = "";

  buttonClicked() {
    alert("Button Clicked");
  }
  buttonDblClicked() {
    this.message = "Button Double Clicked";
    alert("Button Double Clicked");
  }

  InputText: string = "";

  InputChanged(data) {
    this.InputText = data.target.value;    
  }

}
