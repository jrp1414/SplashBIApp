import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pb',
  templateUrl: './property-binding.component.html',
  styles: [
  ]
})
export class PropertyBindingComponent {
  imageUrl: string = "https://angular.io/assets/images/logos/angular/angular.png";
  disableButton: boolean = true;
  constructor() {
    setTimeout(() => {
      this.disableButton = false;
      this.imageUrl = "https://angular.io/assets/images/logos/angular/angular_solidBlack.png";
    }, 5000);
  }
}
